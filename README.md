# ToggleTree 
ToggleTree makes `ul > li > ul` stuctures collapsible by adding click events.

# Installation
```sh
$ npm install toggletree 
```

# Quick start
Consider the following `html` structure
```html
<nav>
    <ul>
        <li name="projects">
            <a href="#"><span class="material-icons">arrow_drop_down</span> Projects</a>
            <ul>
                <li><a href="#">Little PHP Framework</a></li>
                <li><a href="#">Checkify</a></li>
                <li><a href="#">Cabhair</a></li>
            </ul>
        </li>
        <li name="articles">
            <a href="#"><span class="material-icons">arrow_drop_down</span> Articles</a>
            <ul>
                <li><a href="#">Clean Code Confusion</a></li>
                <li><a href="#">Developers High</a></li>
            </ul>
        </li>
    </ul>
</nav>
```
As you see there's a `ul > li > ul` structure here, wrapped inside a `nav` element. To make this into a ToggleTree implement the following code.
```javascript
import { ToggleTree } from "toggletree";

const parent = document.querySelector('nav');

const toggletree = new ToggleTree(parent);
```
# API
##### toggle(listItem)
Toggle the child `ul` element
```javascript
toggletree.toggle(document.querySelector('li[name=projects]'));
```
##### show(listItem)
Show the child `ul` element
```javascript
toggletree.show(document.querySelector('li[name=projects]'));
```
##### showAll()
Show all `ul` child elements
```javascript
toggletree.showAll();
```
##### collapse(listItem)
Collapse the child `ul` element
```javascript
toggletree.collapse(document.querySelector('li[name=projects]'));
```
##### collapseAll()
Collapse all `ul` child elements
```javascript
toggletree.collapseAll();
```
