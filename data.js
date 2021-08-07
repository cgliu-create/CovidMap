function update() {
    url = 'https://api.covidtracking.com/v1/states/current.json'
    fetch(url).then(function(response) {
        return response.json();
      }).then(function(data) {

        var states = [];
        var nums = [];
        for (const item of data) {
            states.push(item["state"]);
            nums.push(item["positive"]);
        }
        for (let i = 0; i < nums.length; i++) {
            min = i
            for (let v = i+1; v < nums.length; v++) {
                if (nums[v] < nums[min]){
                    min = v;
                }
            }
            temp = nums[i];
            nums[i] = nums[min];
            nums[min] = temp;

            copy = states[i];
            states[i] = states[min];
            states[min] = copy;
        }

        console.log(states)

      }).catch(function() {
        console.log("Booo");
      });
}
document.addEventListener("DOMContentLoaded", function(){
    update();
});