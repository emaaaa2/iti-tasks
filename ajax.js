


// task AJAX
// ----------------------------------------------------

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {

     console.log(xhr.readyState);
     
  if (xhr.readyState == 4) {

    // request successed server
    if (xhr.status >= 200 && xhr.status < 300) {

        // tranform json to object
      var data = JSON.parse(xhr.responseText);
      console.log(data);
    //   names of band
      var keys = Object.keys(data);

    //   label for band 
      var label1 = document.createElement("label");
      label1.textContent = "Band: ";
      document.body.appendChild(label1);
//   dropdown 
      var select = document.createElement("select");
      document.body.appendChild(select);
// Please select default
      var defaultOption = document.createElement("option");
      defaultOption.textContent = "Please select";
      defaultOption.disabled = true;
      defaultOption.selected = true;
      select.appendChild(defaultOption);
//  dropdown for bands
      for (let index = 0; index < keys.length; index++) {
        let option = document.createElement("option");
        option.value = keys[index];
        option.textContent = keys[index];
        select.appendChild(option);
      }
    //   label for artist 

      var label2 = document.createElement("label");
      label2.textContent = " Artist: ";
      document.body.appendChild(label2);
// dropdown 
      var select2 = document.createElement("select");
      document.body.appendChild(select2);
// user changing band
      select.addEventListener("change", function () {
        // deleting old choise
        select2.innerHTML = "";
// Please select default
        var defaultOption = document.createElement("option");
        defaultOption.textContent = "Please select";
        defaultOption.disabled = true;
        defaultOption.selected = true;
        select2.appendChild(defaultOption);
// adding artists
        for (let index = 0; index < data[this.value].length; index++) {
          let option = document.createElement("option");
          option.value = data[this.value][index].name;
          option.textContent = data[this.value][index].name;
          select2.appendChild(option);
        }
      });

      select2.addEventListener("change", function () {
        for (let index = 0; index < data[select.value].length; index++) {
          if (data[select.value][index].name === select2.value) {
            location.assign(data[select.value][index].value);
            break;
          }
        }
      });
    }
  }
};

xhr.open("GET", "./AJAX/rockbands.json");
xhr.send();
