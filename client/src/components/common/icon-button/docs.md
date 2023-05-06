## Компонент IconButton

Варианты использования:

```php
    <IconButton isFill onClick={handleClick}>
        <Location /> /** SVG-иконка */
    </IconButton>
```

```php
    <IconButton isFill={false} onClick={handleClick}>
        <SearchIcon /> /** SVG-иконка */
    </IconButton>
```

Пропс `isFill` необходим для того, чтобы регулировать отображение прожатой кнопки (заливать ее черным цветом или нет).
