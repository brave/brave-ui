# Brave UI System Interface Engineering Specification

> Spec for creating the interface system for brave-ui

Forked from https://github.com/cezaraugusto/brave-ui-system-interface-engineering/

## Status

This document is a work in progress.

## Why this?

* Better design decision while creating new components;
* Help on separation of concerns;
* Improve components' reusability;
* Define naming conventions for components based on group, for best readability.


## Table of Contents

1. [Architectural Decisions](#architectural-decisions)
2. [Fields and labels](#fields-and-labels)
3. [Views](#views)
4. [Buttons](#buttons)
5. [Typography, text and links](#typography-text-and-links)
6. [Content](#content)
7. [Selectors](#selectors)
8. [Indicators](#indicators)

## Architectural Decisions

### General

* Components are written in TypeScript;
* CSS-in-JS was preferred to avoid further config across products. `styled-components` was choosen;
* Components are named with a custom suffix based on their type;
* Components are separated by kind. Components that either share several rules (such as `headings`) or doesn't make sense as a stand-alone (such as `gridSystem`) are included together in the same file.
* Each component should include a `README` file with a brief behavioral explanation and spec.

### Overview

```
- component
---- index.tsx
---- style.ts
---- spec.tsx
---- README.md
---- __spapshots__
-------- spec.tsx.snap
```

## Fields and Labels

Fields are components that change state based on the user's text input. Labels are descriptive texts for other components (not necessarily fields).

### Naming conventions

* `field` suffix should be added to elements where line-breaks are not allowed such as a default text input.

* `box` suffix should be added for elements where line-breaks are allowed either statically or dynamically. For example, a styled `<textarea>` would become `<TextFieldBox>` as you can have as many lines as you want. A search input that shows results in a list would become `<SearchBox>` as its height was changed dynamically. Same applies for the `<select>` element.

### Candidates

* `TextFieldBox` – Default textarea w/ style.
* `TextCountBox` – Textarea with word count and optional clipboard button. As seen on sync/ledger.
* `TextField` – Default `input[type="text"]` field w/ style.
* `SearchField` - Default `input[type="search"]` field w/ style.
* `SearchBox` – `input[type="search"]` w/ a dropdown list showing results (see urlbar).
* `TokenBox` – Similar to `SearchBox` but w/ results as tokens (tags). See the spellcheck box in `preferences->advanced`.
* `TextLabel` – Current `TextLabel` component, now following a name convention.

## Views

Views contain what the user sees on the screen and is not related to textual information or textual positioning.

### Naming conventions

None.

### Candidates

* `Panel` – Highlighted area w/ a border-radius to grab user's attention.
* `Tile` – Similar to `Panel` but squared. Can be used as a link.
* `Dialog` – Dynamic panel w/ optional animation.
* `Sidebar` – See preferences page.
* `DataTable` – Replacement for the current `SortableTable`.
* `ToolTip` – Textual popup shown in a link's hover state.
* `Clock` – As seen on newtab page.
* `PageWrapper` – Wrapper component that normalizes and adds a title to about pages.
* `DataBlock` – A list of items including some sort of data and a text such as newtab stats.


## Buttons

A button is anything that once clicked performs an instant action.

### Naming conventions

* `button` suffix should be used when the component makes use of standard HTML `button` element.

### Candidates

* `UnstyledButton` – Old `ActionButton`. Similar to a link but with semantic HTNL's button properties.
* `PushButton` – Current `PushButton` component.
* `SwitchButton` – Current `SwitchButton` component.
* `ClipBoardButton` – `pushButton` variant with built-in _copy to clipboard_ functionality.
* `ImageButton` – A clickable and optionally styled image (see cryptocurrency buttons on ledger).
* `IconButton` – A clickable and optionally styled icon.
* `SegmentedButton` – Grouped list of buttons to indicate different state changes on the same component.
* `CheckBox` – Styled HTML `checkbox` button.
* `ContentToggleArrow` – Current `ContentToggle` component (see brave shields advanced area).
* `ContentToggleButton` – Similar to `ContentToggleArrow` but as a button instead.


## Typography, text and links

Content components contain what the user sees on the screen and is related to textual information. They are static and styled elements used to help the information display.

### Naming conventions

None except for `heading` which has its own subset of components with the `heading` suffix.

### Candidates

* `Headings` – Group of different heading options for either pages or components.
* `Paragraph` – Default `<p>` tag with optional style.
* `Anchor` – Default `<a>` tag with optional style.
* `Separator` – Default `<hr>` tag with optional margin.


## Content

Content components contain what the user sees on the screen and is related to textual positioning. They are static and unstyled elements used to help define the information architecture.

### Naming conventions

Aside from the grid elements (Grid and Column) which are self-explanatory, all element must have the `content` suffix for easier understanding.

### Candidates

* `GridSystem` – Includes `<Grid>` and `<Column>`. Self explanatory.
* `MediaContent` – For when a media element is shown sideways with a text.
* `BoxedContent` – Simplified version of the grid, which can be rearranged across the screen both vertically and horizontally.


## Selectors

A selector is anything that lead the user to take a limited number of decisions.

### Naming conventions

* `option` suffix should be added to components to avoid conflict with standard HTML elements. For example, a range input would become `RangeOption`.

### Candidates

* `SliderOption` - Default range input with styles.
* `SelectOption` – Current `SelectOption` component, now following a name convention.

## Indicators

Indicators are components that communicates the user that either an action is being performed or at which step the action's state is.

### Naming conventions

* `indicator` suffix should be added to help identifying components of this area.

### Candidates

* `ProgressIndicator` – Progress bar with a neutral background color with an accented color bar indicating progress.
* `LoadingIndicator` – Simple loading element to be visible until content can be shown


