# Code Style :sunglasses:

---

#### Boolean переменные :exclamation:

Для булевых значений используем приставку _**is**_.

> _Пример_:
>
> -   isShow
> -   isLoading

#### Handlers :exclamation:

Названия обработчиков должны выбираться обдуманно и отражать суть.

Допустим, нужно сделать обработчик отправки формы. Его название должно состоять из 3-ёх составляющих:

-   Handle
-   Причастность
-   Что делает

> _Пример_:
>
> -   handleFormSubmit

#### Структуры файлов: :exclamation:

Следует придерживаться следующей последовательности:

##### React-компонент

-   Vars
-   Handlers
-   Effects

##### js/ts файлов

-   Vars
-   Handlers

Данные структуры позволяют лучше цепляться глазами за участки кода.

Группы кода отделяем пустой строкой.

_Как делать_:

```javascript
const [state, setState] = useState(0);

const handleFormSubmit = () => {...};

useEffect(() => {...}, []);
```

_Как не делать_:

```javascript
useEffect(() => {...}, []);
const handleFormSubmit = () => {...};
const [state, setState] = useState(0);
```
