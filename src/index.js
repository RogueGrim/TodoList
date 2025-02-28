import './styles.css'
import { defaultProject } from './deafultProject';
import { updateScreen } from './logic';
import { addProject,addTask} from './eventListeners';


let projectCounter = {
    Storage:[],
    count:0,
    countUp:function(){
        this.count++
    },
    countDown:function(){
        this.count--
    },
}
defaultProject()
updateScreen()
addProject()


export {projectCounter}
