import { persistentAtom, persistentMap } from "@nanostores/persistent"
import { computed } from "nanostores";


export type PromptData = {
    status: 'active' | 'inactive';
    prompt: string
}

export const promptData = persistentMap<PromptData>("STWPrompt", {
    status: 'inactive',
    prompt: ""
})

export const timer =  persistentAtom<number>("STWTimer", 0, {
    encode: JSON.stringify,
    decode: JSON.parse,
})

let timerTimeout: any = undefined;

function startTimer(seconds: number) {
    clearTimeout(timerTimeout)
    timer.set(seconds)
    function decrementTime() {
        if (timer.get()>0) {
            timerTimeout = setTimeout(() => {
				if (timer.get()===0) return;

                timer.set(timer.get()-1)
                decrementTime()
            }, 1000);
        }
    }
    decrementTime();
}

export function startPrompt(prompt: string, seconds: number = 60) {
    guessedLetters.set([])
    promptData.set({
        status: 'active',
        prompt
    });
    startTimer(seconds);
}
export function stopPrompt() {
    clearTimeout(timerTimeout);
    promptData.setKey('status', 'inactive');
    timer.set(0);
}

export const guessedLetters =  persistentAtom<string[]>("STWGuessedLetters", [], {
    encode: JSON.stringify,
    decode: JSON.parse,
})

export const validatedLetters = computed([promptData, guessedLetters], (promptData, guessedLetters)=>{
    const validLetters = promptData.prompt.split('')
    const wrongLetters: string[] = []
    const correctLetters : string[] = []
    guessedLetters.forEach(letter=>{
        if (validLetters.includes(letter)) {
            correctLetters.push(letter)
        } else {
            wrongLetters.push(letter)
        }
    })
    return {
        wrongLetters,
        correctLetters,
    }
})

export const remainingLetters = computed([promptData, guessedLetters], (promptData, guessedLetters)=>{
    return promptData.prompt.split('').filter((letter)=>{
        if (letter===" ") return false;
        if (!guessedLetters.includes(letter)) {
            return true
        }
        return false
    })
})

remainingLetters.listen((rL)=>{
    if (promptData.get().status === 'active') {
        if (rL.length===0 ) {
            stopPrompt()
        } else if (validatedLetters.get().wrongLetters.length > 10) {
            stopPrompt()
        }
    }
})
