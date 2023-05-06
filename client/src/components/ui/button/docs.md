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

Шрифт, отступы, бордер и ширина настраивается через соответствующие пропсы:

```php
    <Button
        buttonTheme='dark'
        fontSize='37px'
        fontWeight={700}
        lineHeight='18px'
        onClick={handleClick}
        outline
        padding='7px 0'
        text='This is button with fixed width'
        width={340}
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
