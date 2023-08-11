<script lang="ts">
    import {getUserData, deltaRoll} from '../stores/players'

    let rollNo: string = "";
    let rollNumInput: string = "";
    let rollCount: number = 0;
    let rollWins: number = 0;

    function clearAll() {
        if (confirm("Are you sure?")) {
			localStorage.clear()
			location.reload()
        }
    }

	/*
	usersWins.subscribe(()=>{
    	rollWins = getWins(rollNo)
	})

	usersCount.subscribe(()=>{
    	rollCount = getRollCount(rollNo)
	})
	*/
	function updateRollDetails() {
		const data = getUserData(rollNo);
    	({ count: rollCount, wins: rollWins } = data);
	}
</script>


<div class="grid">
	<div>
		<form on:submit|preventDefault={()=>{
			rollNo = rollNumInput
			updateRollDetails()
		//
		}}>
				<input type="text" bind:value={rollNumInput} required/>
				<input type="submit" value="search roll#">
		</form>
	</div>

	<div>
		{#if rollNo !== "" }
		<div>

			<b>Roll: {rollNo}</b>
			<b>Tries {rollCount}</b>

			<div class="grid">
				<span role="button" class="outline" on:click={()=>{
					deltaRoll(rollNo, -1, 0)
					updateRollDetails()
				}}>-</span>

				<span role="button" on:click={()=>{
					deltaRoll(rollNo, 1, 0)
					updateRollDetails()
				}}>+</span>
			</div>


			<b>Wins: {rollWins}</b>
			<div class="grid">
				<span role="button" class="outline" on:click={()=>{
					deltaRoll(rollNo, 0, -1)
					updateRollDetails()
				}}>-</span>
				<span role="button" on:click={()=>{
					deltaRoll(rollNo, 0, 1)
					updateRollDetails()
				}}>+</span>
			</div>

		</div>
		{/if}


		<small role="button" class="secondary outline" 
			   style="margin-top: 5em;"
			   on:click={()=>{
			clearAll();
		}}>
			delete all
		</small>

	</div>
</div>
