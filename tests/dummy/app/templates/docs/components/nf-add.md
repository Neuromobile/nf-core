# Docs nf-add
## Basic usage
Let's look at a basic example:
{{#docs-demo as |demo|}}
  {{#demo.example name="nf-add-basic.hbs"}}
    <NfAdd @route="docs" @tooltip="Add me <3"/>
  {{/demo.example}}

  {{demo.snippet "nf-add-basic.hbs"}}
{{/docs-demo}}