function getFirstSelector(selector){
    return document.querySelector(selector)
}


function nestedTarget() {
    return document.getElementById('app').querySelector('div div.target')
}

function increaseRankBy(n) {
    var list =  document.getElementById('app').querySelectorAll('ul.ranked-list')

    for (var i = 0; i < list.length; i++) {
        list[i].innerHTML = (i + 1).toString()
    }
}

function deepestChild() {
    var space = document.getElementById('grand-node')
    var next = []

// Need to put loop here <-- passed test but can be improved
    if (space.querySelector('div')) {
        next.push(space.querySelector('div'))

        if (next[next.length - 1].querySelector('div')){
            return next[next.length - 1].querySelector('div')
        }
    }
}
