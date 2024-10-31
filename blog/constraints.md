---
title: Clarity in Constraints
authors: jake
slug: /constraints
date: 2024-10-31T17:59:00Z
tags: [wordjournal]
---


This blog post is a reflection of chapter 4 of Don Norman's *The Design of Everyday Things.[^1]*


![Alt text](/img/confusion.jpeg "Confusion stock image")
<p style={{textAlign: "center"}}>Never lead your users in opposing directions</p>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Clarity</strong> is an extremely important aspect of any part of design. In particular, constraints need
to be clear such that users won't interpret what they're allowed to do in wildly different ways. Cultural constraints in particular
can be grounds for lots of confusion. For this reason, UIs should aim to use globally-recognizable standards when inducing constraints or at
least specify the standard which they're expecting. 
It may feel tempting to design specifically for users of the country you live in because that is the first market you want to capture.
However, this is bound to lead to confusion down the line if your application grows into something bigger.


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;One obvious example of a poor cultural constraint is designing an application such that it expects weight 
in pounds without clarifying this to the user. While US users will mostly follow this constraint implicitly, nearly any other country
will give you data that you won't be handling correctly. Though we don't have a universal unit to use in a situation like this, specifying
the expected input format or allowing your users to select a unit preference is a simple solution to prevent ambiguity across cultures.


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;At the company I work for, we have an entire department dedicated to addressing cultural constraints and 
differences. While this isn't necessary for every team, putting a little forethought into the cultural constraints of your application
is a surefire way to prevent unplanned for issues in a growing application.


	[^1]: Norman, Don. The Design of Everyday Things. Basic Books, 2013. 