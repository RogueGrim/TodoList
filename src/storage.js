function storeData(count,object){
    localStorage.setItem(`project${count}`,object)
}

export{storeData}