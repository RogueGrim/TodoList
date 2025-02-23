import './styles.css'
import { dailogCreation ,taskCreation,editDialog,editTaskDialog} from './dialog';
import {Project,getValues,getTodos} from './class';
import { renderCard,renderList,renderTodo} from './render';
import { defaultProject } from './deafultProject';
import { storeData } from './storage';
import { updateScreen } from './logic';


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

export {projectCounter}
