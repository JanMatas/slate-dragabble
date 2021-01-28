# Slate dragging PoC
PoC of Notion like dragging. You can drag each block to top/bottom for reordering and
to left/right for creating multi-column layout. Note that drop area for left/right
dropping is hard to see.

## To run 

```
yarn start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## To use
There is a folder `slate-dragabble` that exposes `withDrags` plugin, you will need use
during editor initialisation and `renderDraggableElement`, you will need to use as wrapper to
`renderElement`. Everything gets draggable treatment, so it might not work well with bigger apps. It
is a TODO to add a method to decide which elements should be wrapped in Draggable container.