/*
Create an Angular Component which does simple stacked vertical and horizontal layout. The size of each child component in the StackPanel should be sized in the direction of the panel's orientation as large as the component wants to be, but should be forced to be the full height of the panel. So if it the panel were horizontal orientation which is default, then the first component could have a width of 100px and the second 25 px, but the height of both would be either the height of the panel if set explicitly or the height of the taller component.

Example 1: Horizontal by default. Even if a child component is very wide, the components will all be on the same line and never wrap.

<StackPanel>
  <Component1></Component1>
  <Component2></Component2>
  <Component3></Component3>
</StackPanel>



Example 2: Vertical. Even if the child component is very thin the next component in the StackPanel will always be on the next line.

<StackPanel orientation="Vertical">
  <Component1></Component1>
  <Component2></Component2>
  <Component3></Component3>
</StackPanel>



Example 3: Multiple levels of layouts should work:

<StackPanel>
  <StackPanel orientation="Vertical">
    <Component1></Component1>
    <Component2></Component2>
  </StackPanel>
 <Component1></Component1>
</StackPanel>

*/
