import { withRouter } from 'umi';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

const TransitionLayout = withRouter(({ location, children }) => {
  return (
    // https://reactcommunity.org/react-transition-group/switch-transition
    <SwitchTransition mode='out-in'>
      <CSSTransition<undefined>
        key={location.pathname}
        classNames='fade'
        timeout={500}
        addEndListener={(node: HTMLElement, done: () => void) => {
          node.addEventListener('transitionend', done, false);
        }}
      >
        {/* 由于开发环境开启了 dynamicImport，会导致注入的动画样式丢失，故需要保证顶级容器的不变性 */}
        <div>{children}</div>
      </CSSTransition>
    </SwitchTransition>
  );
});

export default TransitionLayout;
