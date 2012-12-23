// To embed Online Python Tutor visualizations into embedding-demo.html ...

// 1. Run generate_json_trace.py to generate execution traces as JavaScript variables.
//    (WARNING: The following lines are VERY LONG.)

// And finally, let's generate one last trace and copy it in here:
//   python generate_json_trace.py --create_jsvar=happyTrace tests/example-code/happy.txt

var boucleTrace = {"code": "i = 1\nwhile i <= 5:\n    print(i)\n    i = i + 1\nprint('Fini !')", "trace": [{"ordered_globals": [], "stdout": "", "func_name": "<module>", "stack_to_render": [], "globals": {}, "heap": {}, "line": 1, "event": "step_line"}, {"ordered_globals": ["i"], "stdout": "", "func_name": "<module>", "stack_to_render": [], "globals": {"i": 1}, "heap": {}, "line": 2, "event": "step_line"}, {"ordered_globals": ["i"], "stdout": "", "func_name": "<module>", "stack_to_render": [], "globals": {"i": 1}, "heap": {}, "line": 3, "event": "step_line"}, {"ordered_globals": ["i"], "stdout": "1\n", "func_name": "<module>", "stack_to_render": [], "globals": {"i": 1}, "heap": {}, "line": 4, "event": "step_line"}, {"ordered_globals": ["i"], "stdout": "1\n", "func_name": "<module>", "stack_to_render": [], "globals": {"i": 2}, "heap": {}, "line": 2, "event": "step_line"}, {"ordered_globals": ["i"], "stdout": "1\n", "func_name": "<module>", "stack_to_render": [], "globals": {"i": 2}, "heap": {}, "line": 3, "event": "step_line"}, {"ordered_globals": ["i"], "stdout": "1\n2\n", "func_name": "<module>", "stack_to_render": [], "globals": {"i": 2}, "heap": {}, "line": 4, "event": "step_line"}, {"ordered_globals": ["i"], "stdout": "1\n2\n", "func_name": "<module>", "stack_to_render": [], "globals": {"i": 3}, "heap": {}, "line": 2, "event": "step_line"}, {"ordered_globals": ["i"], "stdout": "1\n2\n", "func_name": "<module>", "stack_to_render": [], "globals": {"i": 3}, "heap": {}, "line": 3, "event": "step_line"}, {"ordered_globals": ["i"], "stdout": "1\n2\n3\n", "func_name": "<module>", "stack_to_render": [], "globals": {"i": 3}, "heap": {}, "line": 4, "event": "step_line"}, {"ordered_globals": ["i"], "stdout": "1\n2\n3\n", "func_name": "<module>", "stack_to_render": [], "globals": {"i": 4}, "heap": {}, "line": 2, "event": "step_line"}, {"ordered_globals": ["i"], "stdout": "1\n2\n3\n", "func_name": "<module>", "stack_to_render": [], "globals": {"i": 4}, "heap": {}, "line": 3, "event": "step_line"}, {"ordered_globals": ["i"], "stdout": "1\n2\n3\n4\n", "func_name": "<module>", "stack_to_render": [], "globals": {"i": 4}, "heap": {}, "line": 4, "event": "step_line"}, {"ordered_globals": ["i"], "stdout": "1\n2\n3\n4\n", "func_name": "<module>", "stack_to_render": [], "globals": {"i": 5}, "heap": {}, "line": 2, "event": "step_line"}, {"ordered_globals": ["i"], "stdout": "1\n2\n3\n4\n", "func_name": "<module>", "stack_to_render": [], "globals": {"i": 5}, "heap": {}, "line": 3, "event": "step_line"}, {"ordered_globals": ["i"], "stdout": "1\n2\n3\n4\n5\n", "func_name": "<module>", "stack_to_render": [], "globals": {"i": 5}, "heap": {}, "line": 4, "event": "step_line"}, {"ordered_globals": ["i"], "stdout": "1\n2\n3\n4\n5\n", "func_name": "<module>", "stack_to_render": [], "globals": {"i": 6}, "heap": {}, "line": 2, "event": "step_line"}, {"ordered_globals": ["i"], "stdout": "1\n2\n3\n4\n5\n", "func_name": "<module>", "stack_to_render": [], "globals": {"i": 6}, "heap": {}, "line": 5, "event": "step_line"}, {"ordered_globals": ["i"], "stdout": "1\n2\n3\n4\n5\nFini !\n", "func_name": "<module>", "stack_to_render": [], "globals": {"i": 6}, "heap": {}, "line": 5, "event": "return"}]};

// 2. When the HTML document finishes loading, populate the three divs
//    (listSumDiv, hanoiDiv, happyDiv) with the visualizations
//    corresponding to the respective traces.
$(document).ready(function() {

  // 3. Create a new ExecutionVisualizer object for each visualization.
  //    (See js/pytutor.js for the full specs of ExecutionVisualizer.)
  //
  //    The basic idea is that the parent div name is passed as the first argument,
  //    and the trace object is passed as the second argument.
  //
  //    The third argument contains optional parameters.

  // Note that "embeddedMode: true" makes the visualizer appear more compact on-screen.
  // editCodeBaseURL is the base URL to prepend onto the 'Edit code' link.


  // A more subtle point is that when some div in your HTML webpage
  // (such as a visualizer div) expands in height, it will "push down"
  // all divs below it, but the SVG arrows rendered by jsPlumb
  // WILL NOT MOVE. Thus, they will be in the incorrect location
  // unless you call redrawAllConnectors().
  //
  // We use the "heightChangeCallback" optional parameter to force redraw
  // of all SVG arrows of ALL visualizers, whenever the height of one changes.
  //
  // Alternatively, here is one jQuery plugin that you can use to detect div height changes:
  // http://benalman.com/projects/jquery-resize-plugin/
  //
  // A related trick you can implement is to make a div never shrink in height once it's grown;
  // that way, you can avoid lots of jarring jumps and (inefficient) redraws.

  // Render listSumTrace inside of listSumDiv
 

  // The "startingInstruction: 15" optional parameter means to jump to step 15
  // in the visualization when it loads. (The HTML webpage will actually display
  // "Step 16 of 64" since indices are zero-indexed.)
  //
  // verticalStack means to stack the code and visualizations vertically atop one another
  // (rather than side-by-side)


  // "embeddedMode: false" displays the full visualizer widget with the "Program Output" pane
  // "jumpToEnd: true" means to jump to the end of execution upon loading.

  var boucleVisualizer   = new ExecutionVisualizer('boucleDiv', boucleTrace,
                                                  {embeddedMode: false,
                                                   jumpToEnd: false,
                                                   codeDivWidth: 450,
                                                   codeDivHeight: 250,
                                                   // no need for heightChangeCallback since
                                                   // this is the "bottom-most" visualizer,
                                                   // so no arrows appear below it
                                                   editCodeBaseURL: 'http://pythontutor.com/visualize.html'
                                                   });



  // Call redrawConnectors() on all visualizers whenever the window is resized,
  // since HTML elements might have moved during a resize. The SVG arrows rendered
  // by jsPlumb don't automatically get re-drawn in their new positions unless
  // redrawConnectors() is called.
  $(window).resize(redrawAllVisualizerArrows);
});
