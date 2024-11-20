import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import "./index.css";

function HomepageBanner() {
  return (
    <div className="secos-banner-container">
      <div className="secos-banner-left">
        <div className="secos-banner-title" >
          SecOS
        </div>
        <div className="secos-banner-description" style={{ position: "relative", zIndex: 2 }}>
          专注于 AIoT 领域的安全操作系统内核
        </div>

        <div className="secos-banner-feature">
          <ul>
            <li>模块化设计</li>
            <li>多内核架构形态</li>
            <li>多应用场景支持</li>
            <li>采用 Rust 语言开发</li>
            <li>支持 RTOS、BareMetal、Linux 作为子系统</li>
            <li>MIT 宽松开源协议</li>
          </ul>
        </div>

        <div className="secos-banner-support">
          <p className="secos-banner-support-title">多架构支持，已在如下架构中进行了验证</p>
          <div className="secos-banner-support-icons">
            <span>
              <img src="img/arm.svg"></img>
            </span>
            <span>
              <img src="img/x86.svg"></img>
            </span>
          </div>
        </div>

        <div className="secos-banner-button">
          <Link className="secos-banner-explore-button" to={useBaseUrl("docs/intro")}>
            入门指南
          </Link>

          <Link className="secos-banner-download-button" to={useBaseUrl("docs/intro")}>
            下载
          </Link>
        </div>
      </div>

      <div className="secos-banner-right">
        <img className="secos-banner-content-image" src="img/secos.arch.svg"></img>
      </div>
    </div>
  );
}

function HomepageForm() {
  return (
    <div className="secos-form-container">
      <h1 className="text--center secos-form-title">多内核架构形态</h1>
      <p className="text--center secos-form-description">多内核架构形态多内核架构形态多内核架构形态多内核架构形态多内核架构形态多内核架构形态多内核架构形态多内核架构形态多内核架构形态多内核架构形态多内核架构形态多内核架构形态多内核架构形态多内核架构形态多内核架构形态多内核架构形态多内核架构形态多内核架构形态多内核架构形态多内核架构形态多内核架构形态多内核架构形态</p>
      <div className="secos-form-content">
        <div className="secos-form-content-left">
          <img className="secos-form-content-image" src="img/secos.form.png"></img>
        </div>
        <div className="secos-form-content-right">
        <h3 className="secos-form-content-right-title">多内核架构形态的进一步描述</h3>
          <ul className="secos-form-feature">
            <li>与 OS 无关的语言级核心库</li>
            <li>独立 OS 的组件库</li>
            <li>耦合 OS 的组件库</li>
            <li>挂接组件的内核主干</li>
            <li>独立 OS 的组件库无紧耦合依赖关系</li>
            <li>基于配置和静态分析进行架构优化</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function HomepageModule() {
  return (
    <div className="secos-module-container">
      <h1 className="text--center secos-module-title">模块化设计</h1>
      <p className="text--center secos-module-description">全模块化设计全模块化设计全模块化设计全模块化设计全模块化设计全模块化设计全模块化设计全模块化设计全模块化设计全模块化设计全模块化设计全模块化设计全模块化设计全模块化设计全模块化设计全模块化设计全模块化设计全模块化设计全模块化设计全模块化设计全模块化设计全模块化设计全模块化设计全模块化设计全模块化设计全模块化设计全模块化设计全模块化设计全模块化设计全模块化设计全模块化设计</p>
      <div className="secos-module-content">
        <div className="secos-module-content-left">
          <img className="secos-module-content-image" src="img/secos.module.png"></img>
        </div>
        <div className="secos-module-content-right">
        <h3 className="secos-module-content-right-title">模块化设计的进一步描述</h3>
          <ul className="secos-module-feature">
            <li>与 OS 无关的语言级核心库</li>
            <li>独立 OS 的组件库</li>
            <li>耦合 OS 的组件库</li>
            <li>挂接组件的内核主干</li>
            <li>独立 OS 的组件库无紧耦合依赖关系</li>
            <li>基于配置和静态分析进行架构优化</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function HomepageTarget() {
  return (
    <div className="secos-target-container">
      <h1 className="text--center secos-target-title">多应用场景支持</h1>
      <p className="text--center secos-target-description">全模块化设计全模块化设计全模块化设计全模块化设计全模块化设计全模块化设计全模块化设计全模块化设计全模块化设计全模块化设计全模块化设计全模块化设计全模块化设计全模块化设计全模块化设计全模块化设计全模块化设计全模块化设计全模块化设计全模块化设计全模块化设计全模块化设计全模块化设计全模块化设计全模块化设计全模块化设计全模块化设计全模块化设计全模块化设计全模块化设计全模块化设计</p>
      <div className="secos-target-content">
        <div className="secos-target-content-left">
        <h3 className="secos-target-content-left-title">多应用场景支持多应用场景支持多应用场景支持多应用场景支持多应用场景支持多应用场景支持</h3>
          <ul className="secos-target-feature">
            <li>模块 1 模块 1 模块 1 </li>
            <li>模块 2 模块 2 模块 2</li>
            <li>模块 3 模块 3 模块 3</li>
            <li>模块 4 模块 4 模块 4</li>
          </ul>
        </div>
        <div className="secos-target-content-middle">
          <img className="secos-target-content-image" src="img/secos.target.png"></img>
        </div>
        <div className="secos-target-content-right">
        <h3 className="secos-target-content-right-title">通过模块的自由组合，形成适用于不同应用场景的内核。通过模块的自由组合，形成适用于不同应用场景的内核。</h3>
          <ul className="secos-target-feature">
            <li>模块 1 模块 1 模块 1 </li>
            <li>模块 2 模块 2 模块 2</li>
            <li>模块 3 模块 3 模块 3</li>
            <li>模块 4 模块 4 模块 4</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Layout title="专注于 AIoT 领域的安全操作系统内核" description="专注于 AIoT 领域的安全操作系统内核">

      <HomepageBanner />

      <HomepageForm />

      <HomepageModule />

      <HomepageTarget />

    </Layout>
  );
}
