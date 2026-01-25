// Javascript Loops ...
        // 1 . For Loop ............
        console.log("1 . For Loop  ............................................................");
        for (let i = 1; i  <=10; i++) {
            console.log(i);
        }
        
        // 2 . For in Loop ............
        console.log("2 . For In Loop  ............................................................");
        
        let obj = {
            name :"tiwari",
            role :"student",
            work :"Coding"
        }
        
        for (const key in obj) {
            console.log(obj);
        }
        
        console.log("3 . For of Loop ............................................................");
        // 3 . For of Loop .............................
        
        
        for (const char of "Hello") {
            console.log(char);
        }
        
        // 4 . While Loop ............
        console.log("4 . While Loop  ............................................................");
        
        let j = 1;
        while (j <=10) {
            console.log(j);
            j++;
        }
        console.log("5 . Do While Loop  ............................................................");
        let z=1;
        do {
            console.log(z);
            z++;
        } while (z <=10);