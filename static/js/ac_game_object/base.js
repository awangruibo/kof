let AC_GAME_OBJECTS = [];

class AcGameObject {
    constructor(){
        AC_GAME_OBJECTS.push(this);

        this.timedelta = 0;
        this.has_call_statr = false;
    }

    start(){

    }

    update(){

    }

    destroy(){
        for (let i in AC_GAME_OBJECTS){
            if (AC_GAME_OBJECTS[i] === this){
                AC_GAME_OBJECTS.splice(i, 1);
                break;
            }
        }
    }

}

let last_timestamp;

let AC_GAME_OBJECTS_frame = (timestamp) => {
    for (let obj of AC_GAME_OBJECTS){
        if (!obj.has_call_statr){
            obj.start();
            obj.has_call_statr = true;
        }
        else{
            obj.timedelta = timestamp - last_timestamp;
            obj.update();
        }
    }

    last_timestamp = timestamp;
    requestAnimationFrame(AC_GAME_OBJECTS_frame);
}

requestAnimationFrame(AC_GAME_OBJECTS_frame);

export{AcGameObject}