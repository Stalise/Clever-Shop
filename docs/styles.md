# Styles

---

## CSS-variables:

В проекте присутствуют css-переменные для цветов. Они находятся в `styles/colors-variables.css`;

> Пример использования:

```css
.title {
    color: var(--yellow);
}
```

## Mixins:

Для сокращения дублирования css кода можно использовать миксины от _styled-components_. Прочитать подробнее можно [тут](https://maddev.netlify.app/development/styled_components_mixins/).

Миксины протипизированы с помощью Typescript и, как правило, содержат необязательные пропсы и значения по умолчанию для удобного использования.

На данным момент в проекте присутствует только 2 миксина:

-   для шрифтов (font)
-   для флексов (flex)

> Пример миксина и его использования:

```css
interface IFont {
    color?: string;
    size?: string;
    family?: string;
}

const font = ({ color, size, family }: IFont) => `
    color: ${color || "red"};
    font-size: ${size || "1rem"};
    font-family: ${family || "Roboto"};
`;

const Container = styled.div`
    text-align: center;
    ${font({ color: "green", size: "2rem" })};
`;
```

Миксины можно добавлять в процессе разработки в файл `styles/mixins.ts`.
