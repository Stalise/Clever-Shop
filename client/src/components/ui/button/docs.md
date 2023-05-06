## Компонент Button

Существует два стиля отображения: `light` и `dark`:

```php
    <Button
        buttonTheme='dark'
        onClick={handleClick}
        text='This is dark button'
    />
```

```php
    <Button
        buttonTheme='light'
        onClick={handleClick}
        text='This is light button'
    />
```

У кнопки есть разные размеры: `s, m, l`. Настраивается через пропс `size`;

```php
    <Button
        buttonTheme='light'
        onClick={handleClick}
        size='l'
        text='This is light button'
    />
```

Шрифт, отступы, бордер и ширина настраивается через соответствующие пропсы:

```php
    <Button
        buttonTheme='dark'
        fontSize={16}
        fontWeight={700}
        lineHeight={18}
        onClick={handleClick}
        outline
        text='This is button with fixed width'
    />
```

Есть возможность растянуть кнопку на всю ширину родителя (доступно благодаря пропсу `block`, подойдет для модалки с корзиной):

```php
    <Button
        block
        buttonTheme='dark'
        onClick={handleClick}
        text='This is big button'
    />
```
