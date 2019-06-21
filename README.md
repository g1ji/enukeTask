
<img src='https://g.gravizo.com/svg?%20digraph%20G%20{%20main%20-%3E%20parse%20-%3E%20execute;%20main%20-%3E%20init;%20main%20-%3E%20cleanup;%20execute%20-%3E%20make_string;%20execute%20-%3E%20printf%20init%20-%3E%20make_string;%20main%20-%3E%20printf;%20execute%20-%3E%20compare;%20}'/>


+ This Directory

|

|

+-------+test(Enuke test questions)

|

+-------+ solution

|	|

|	+-------+marcoPolo (The Marco Polo Game Solution)

|	|

|	+-------+parseInvoiceNumbers (Implementing a User Story Solution)

|




marcoPolo (The Marco Polo Game Solution):
-----------------------------------------

Build with

	angular js
	bootstrap

How do I get set up? for dev

	This dummy code don't require any special setup 
	All dependencies are bundled
	Can be run without any web server


How can you limit the scope on a directive and why would you do this? 
---------------------------------------------------------------------

	Ans: 
	----	
		scope is the glue between template and controller we can limit scope of directive 
		by introducing isolated scope, we create isolated scope so that we can use the directive
		as reusable compnent.





parseInvoiceNumbers (Implementing a User Story Solution):
---------------------------------------------------------

Build with

	angular js
	bootstrap

How do I get set up? for dev

	This dummy code don't require any special setup 
	All dependencies are bundled
	Can be run without any web server







![Alt text](https://g.gravizo.com/svg?
  digraph G {
    aize ="4,4";
    main [shape=box];
    main -> parse [weight=8];
    parse -> execute;
    main -> init [style=dotted];
    main -> cleanup;
    execute -> { make_string; printf}
    init -> make_string;
    edge [color=red];
    main -> printf [style=bold,label="100 times"];
    make_string [label="make a string"];
    node [shape=box,style=filled,color=".7 .3 1.0"];
    execute -> compare;
  }
)
















Read me by G1JI
