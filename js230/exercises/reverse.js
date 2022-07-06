//when you click html, set the container's style to "none"
document.querySelector('html').addEventListener('click', () => {
  document.querySelector('#container').style = 'display: none';
}, true);

document.querySelector('#container').addEventListener('click', event => {
  document.querySelector('#container').style = 'display: yes'
});

/*
//so the stop propagation of this code prevents the container from being
//hidden: the event fires at the start of the bubble phase, and prevents
//the hiding action from happening at the end of the bubble phase. 

No, that's not what happens. The container is hidden if anyone clicks 
anywhere outside it. the capture and bubble phases don't involve the 
entire dom: they start high and walk down until we hit the event target,
NOT the lowliest child. 

So, if we can't stop propagation, what else can we do?
  could have the hiding action fire during the capture phase, and change
  the container event listener to a show action that fires during bubbling...

  That's not great because we interact with the dom twice when we don't 
  have to: can also introduce a condition in the top level event listener
  to not hide the container if the event target is the container or its 
  children. the .contains method on node elements is helpful for this.
*/