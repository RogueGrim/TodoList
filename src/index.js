import './styles.css'
import { defaultProject } from './deafultProject';
import { addProject ,updateScreen} from './eventListeners';


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
