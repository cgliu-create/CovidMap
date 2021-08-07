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
        let colors =[
            "hsl(0, 100%, 95%)",
            "hsl(0, 100%, 90%)",
            "hsl(0, 100%, 85%)",
            "hsl(0, 100%, 80%)",
            "hsl(0, 100%, 75%)",
            "hsl(0, 100%, 70%)",
            "hsl(0, 100%, 65%)",
            "hsl(0, 100%, 60%)",
            "hsl(0, 100%, 55%)",
            "hsl(0, 100%, 50%)",
            "hsl(0, 100%, 45%)",
            "hsl(0, 100%, 40%)",
            "hsl(0, 100%, 35%)",
            "hsl(0, 100%, 30%)",
            "hsl(0, 100%, 25%)",
            "hsl(0, 100%, 20%)",
            "hsl(0, 100%, 15%)",
            "hsl(0, 100%, 10%)",
            "hsl(0, 100%, 5%)",
            "hsl(0, 100%, 0%)"
        ]
        console.log(states)
        console.log(nums)
       
        let color = 1;
        let counter = 1;

        for (const state of states) {
            let tag = state.toLowerCase();
            console.log(tag);
            let el = document.getElementsByClassName(tag);
            for (const l of el) {
                l.style.fill = colors[color];
                console.log(colors[color])
            }
            counter +=1;
            if (counter == 4) {
                color +=1
                counter = 1;
            }
        }

      }).catch(function() {
        console.log("Booo");
      });
}
document.addEventListener("DOMContentLoaded", function(){
    update();
});