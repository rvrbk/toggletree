export class ToggleTree {
    constructor(parent, options) {
        this.parent = parent;
        this.listItems = [];
        this.options = options;
        this.useIcon = false;

        if (this.options !== undefined && (this.options.iconSelector !== undefined || this.options.iconVisible !== undefined || this.options.iconCollapsed !== undefined)) {
            if (this.options.iconSelector === undefined || this.options.iconVisible === undefined || this.options.iconCollapsed === undefined) {
                console.warn('It seems you want to use an icon, please make sure that you provide all of the following options: options.iconSelector, options.iconVisible and options.iconCollapsed');
            }

            this.useIcon = true;
        }
         
        this.init();
    }

    init() {
        const listItems = this.parent.querySelectorAll(':scope li');

        listItems.forEach(listItem => {
            const childList = listItem.querySelector(':scope ul');

            if (childList !== null) {
                this.listItems.push(listItem);
                
                listItem.querySelector('a').onclick = event => {
                    event.preventDefault();

                    this.toggle(listItem);
                }
            }
        });
    }

    isCollapsed(listItem) {
        if (listItem.querySelector('ul').style.display === 'none') {
            return true;
        }

        return false;
    }

    toggle(listItem) {
        if (this.isCollapsed(listItem)) {
            this.show(listItem);
        }
        else {
            this.collapse(listItem);    
        }
    }

    show(listItem) {
        const list = listItem.querySelector('ul');

        list.style.display = 'block';

        listItem.classList.add('active');

        if (this.useIcon) {
            listItem.querySelector(this.options.iconSelector).innerHTML = this.options.iconVisible;
        }
    }

    showAll() {
        this.listItems.forEach(listItem => {
            this.show(listItem);
        });
    }

    collapse(listItem) {
        const list = listItem.querySelector('ul');

        list.style.display = 'none';

        listItem.classList.remove('active');

        if (this.useIcon) {
            listItem.querySelector(this.options.iconSelector).innerHTML = this.options.iconCollapsed;
        }
    }

    collapseAll() {
        this.listItems.forEach(listItem => {
            this.collapse(listItem);
        });
    }
}