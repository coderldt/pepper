import { createTest, createVue, destroyVM } from '../util';
import RadioGroup from 'packages/radio-group';

describe('RadioGroup', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm)
  })

  it('create', () => {
    vm = createTest(RadioGroup, true);
    expect(vm.$el).to.exist;
  })

  it('data', done => {
    vm = createVue({
      template: `
        <p-radio-group :data="animalGroup" v-model="animal"></p-radio-group>
      `,
      data() {
        return {
          animalGroup: [
            { key: 'monkey', value: '猴子' },
            { key: 'rabbit', value: '兔子' },
            { key: 'lion', value: '狮子' },
            { key: 'elephant', value: '大象' },
          ],
          animal: 'monkey',
        }
      }
    }, true)
    setTimeout(() => {
      expect(vm.$el.querySelectorAll('.p-radio-group .p-radio').length).to.be.equal(4);
      done();
    }, 10);
  })

  it('size', done => {
    vm = createVue({
      template: `
      <p-radio-group type="button" size="s" :data="foodsGroup" labelName="label" v-model="foods" ></p-radio-group>
      `,
      data() {
        return {
          foodsGroup: [
            { key: 'hotDog', label: '热狗' },
            { key: 'noodles', label: '面条' },
            { key: 'rice', label: '米饭' },
            { key: 'chicken', label: '鸡肉' },
          ],
          foods: 'noodles'
        }
      }
    }, true)
    setTimeout(() => {
      expect(vm.$el.querySelectorAll('.p-radio-group .p-button.p-button-s').length).to.be.equal(4);
      done();
    }, 10);
  })
});

