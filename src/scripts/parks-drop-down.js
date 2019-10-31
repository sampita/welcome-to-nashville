const createSearchForm = () => {
    const parkSearchList = `
    <fieldset>
    <select id ="parks-dropdown-box">
        <option value="" disabled selected hidden>parks by feature</option>
        <option value="dog_park">Dog Park</option>
        <option value="hiking_trails">Hiking Trails</option>
        <option value="playground">Playground</option>
        <option value="basketball_court">Basketball Courts</option>
        <option value="swimming_pool">Swimming Pool</option>
    </select>
</fieldset>
</form>
      `
      const parkSearchContainerDiv = document.querySelector("#parks-input");
      parkSearchContainerDiv.innerHTML = parkSearchList;
    };
