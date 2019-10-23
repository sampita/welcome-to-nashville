const makeSearchForm = () => {
    const parkSearchList = `
      <fieldset>
      <select id ="parks-dropdown">
      <option value="" disabled selected hidden>parks by feature</option>
      <option value="dog_park">Dog Park</option>
      <option value="hiking_trails">Hiking Trails</option>
      <option value="playground">Playground</option>
      <option value="basketball_court">Basketball Courts</option>
      <option value="swimming_pool">Swimming Pool</option>
      </select>
      <button id="parks-search-button">Button</button>
          </fieldset>
      `
