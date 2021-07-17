class CounterPlugin {

    constructor({ rootSelector, counterValue = 0, step = 1 }) {
        
        this._value = counterValue;
        this._step = step;

        this._refs = this._getRefs(rootSelector);

        this._bindEvents();
    }

    _getRefs(rootSelector) {
        const refs = {};
        refs.container = document.querySelector(rootSelector);

        refs.incrementBtn = refs.container.querySelector('[data-action="increment"]');
        refs.decrementBtn = refs.container.querySelector('[data-action="decrement"]');
        refs.value = refs.container.querySelector('#value');

        return refs;
    }

    _bindEvents() {
        this._refs.incrementBtn.addEventListener('click', () => {
            this.increment();
            this.updateValueUi();
        });

        this._refs.decrementBtn.addEventListener('click', () => {
            this.decrement();
            this.updateValueUi();
        })
    }

    updateValueUi() {
        this._refs.value.textContent = this._value;
    }

    increment() {
        this._value += this._step;
    }

    decrement() {
        this._value -= this._step;
    }
 };


new CounterPlugin({ rootSelector: '#counter'});
