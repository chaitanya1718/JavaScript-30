
console.log("updated");
const panels=document.querySelectorAll('.panel');

        function toggleOpen(){
            console.log("toggled open");
            this.classList.toggle('open');
        }
        function toggleOpenActive(e){
            console.log(e.propertyName);
          
            if(e.propertyName.includes('flex-grow')){
               console.log("started toggle");
              this.classList.toggle('open-active');
                console.log("completed");
            }
        }

        panels.forEach(panel=>panel.addEventListener('click',toggleOpen));
        panels.forEach(panel=>panel.addEventListener('transitionend',toggleOpenActive));
