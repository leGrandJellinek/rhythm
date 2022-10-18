function  scrollAnimation() {
    const animItems = document.querySelectorAll('.animation-item');
        if(animItems.length > 0){
            for (let i = 0; i < animItems.length; i++) {
                const item = animItems[i];
                const itemHeight = item.offsetHeight;
                const itemOffset = offset(item).top;
                const itemStart = 4;
    
                let itemPoint = window.innerHeight - itemHeight / itemStart;
                if(itemHeight > window.innerHeight){
                    ItemPoint = window.innerHeight - itemHeight / itemStart;
                }
    
                if(scrollY > (itemOffset - itemPoint ) && scrollY < (itemOffset - itemHeight)){
                    item.classList.add('animation-show');
                }else{
                    item.classList.remove('animation-show');
                }
            }
        }
    }
function offset(el) {
    const rect = el.getBoundingClientRect(),
    scrollLeft = window.scrollX || document.documentElement.scrollLeft,
    scrollTop = window.scrollY || document.documentElement.scrollTop;
    return {
        top:rect.top + scrollTop,
        left: rect.left +scrollLeft
    }
}

export {scrollAnimation, offset}