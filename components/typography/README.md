## Typography

### Markup

```html
<m-typography>
    <m-typo-headline :level="1">Headline</m-typo-headline>
    <m-typo-overline>Overline</m-typo-overline>
    <m-typo-subheading :level="1">Subheading 1</m-typo-subheading>
    <m-typo-body :level="2">Body 2</m-typo-body>
    <m-typo-caption>Caption</m-typo-caption>
    <m-typo-button>Button</m-typo-button>
</m-typography>
```

## Body

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| level | Number | - | body level could be 1 or 2 |

### Slots

| Slot | Description |
|------|-------------|
| default | content |

## Button

### Slots

| Slot | Description |
|------|-------------|
| default | content |

## Caption

### Slots

| Slot | Description |
|------|-------------|
| default | content |

## Headline

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| level | Boolean | false | headline level between 1 and 6 |

### Slots

| Slot | Description |
|------|-------------|
| default | content |

## Subheading

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| level | Number | - | subheading level could be 1 or 2 |

### Slots

| Slot | Description |
|------|-------------|
| default | content |

## Overline

### Slots

| Slot | Description |
|------|-------------|
| default | content |


## Text

### Markup

```html
<m-text tag="p" use="headline1">
  Headline
</m-text>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| tag | String | span | HTML tag name |
| use | String | - | typography style: headline1, headline2, headline3, headline4, headline5, headline6, subtitle1, subtitle2, body1, body2, caption, button, overline |

### Slots

| Slot | Description |
|------|-------------|
| default | typography content |

### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-toolbar
