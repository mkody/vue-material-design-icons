import { createApp, h } from 'vue'
import AndroidIcon from '../dist/Android.vue';

function mount(Component, props, slots) {
  document.getElementsByTagName('html')[0].innerHTML = '';
  const el = document.createElement('div');
  el.id = 'app';
  document.body.appendChild(el);
  const Parent = {
    render () {
      return h(Component, props, slots)
    }
  }
  createApp(Parent).mount(el)
}

describe('Icon', () => {
  let icon;

  beforeEach(() => {
    icon = mount(AndroidIcon);
  });

  it('accepts a "title" property', async () => {
    expect(icon.attributes()['aria-label']).toBeUndefined();

    await icon.setProps({ title: 'foo' });

    expect(icon.attributes()['aria-label']).toEqual('foo');
  });

  it('accepts a "fillColor" property', async () => {
    const svg = icon.find('.material-design-icon__svg');

    expect(svg.attributes()['fill']).toEqual('currentColor');

    await icon.setProps({ fillColor: '#FF0000' });

    expect(svg.attributes()['fill']).toEqual('#FF0000');
  });

  it('renders an icon', () => {
    expect(icon.wrapperElement).toMatchSnapshot();
  });

  it('listens to a click event', async () => {
    const clickListener = jest.fn();
    const iconWithEvent = mount({
      name: 'IconWithEvent',
      components: { AndroidIcon },
      template: `
        <AndroidIcon
          @click="clickListener"
        />
      `,
      methods: {
        clickListener,
      },
    });

    await iconWithEvent.trigger('click');
    expect(clickListener).toBeCalled();
  });
});
