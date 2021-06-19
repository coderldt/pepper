import { createTest, createVue, destroyVM } from '../util';
import Radio from 'packages/radio';

describe('Radio', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm)
  })

  it('create', () => {
    vm = createTest(Radio, true);
    expect(vm.$el).to.exist;
  })

  it('size', () => {
    vm = createTest(Radio, {
      size: 's'
    }, true);
    let radioElm = vm.$el;
    expect(radioElm.classList.contains('p-radio-s')).to.be.true;
  });

  it('disabled', () => {
    vm = createTest(Radio, {
      disabled: true
    }, true);
    let radioElm = vm.$el;
    expect(radioElm.classList.contains('p-radio-disabled')).to.be.true;
  });

  it('checked radio', done => {
    vm = createVue({
      template: `
        <p-radio v-model="fruit" class="radioApple" keyName="apple">苹果</p-radio>
        <p-radio v-model="fruit" class="radioBanana" keyName="banana">香蕉</p-radio>
      `,
      data() {
        return {
          fruit: 'apple'
        }
      }
    }, true)
    const radioApple = document.querySelector('.radioApple input')
    setTimeout(() => {
      expect(radioApple.classList.contains('checked')).calledImmediatelyBefore.true
      done()
    }, 10)
  });
});
