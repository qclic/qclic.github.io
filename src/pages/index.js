import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import "./index.css";

function HomepageBanner() {
  return (
    <div className="secos-banner-container">
      <div className="left">
        <div className="secos-banner-title" >
          SecOS
        </div>
        <div className="secos-banner-description" style={{ position: "relative", zIndex: 2 }}>
          专注于 AIoT 领域的安全操作系统内核
        </div>

        <div style={{ position: "relative", zIndex: 2 }}>
          <ul className="secos-banner-spec">
            <li>模块化设计</li>
            <li>采用 Rust 语言开发</li>
            <li>支持 RTOS、BareMetal、Linux 作为子系统</li>
            <li>MIT 宽松开源协议</li>
          </ul>
        </div>
        <div className="secos-support-platform">多架构支持，已在如下架构中进行了验证：</div>
        <div className="secos-support-icons">
          <span>
            <img src="img/arm.svg"></img>
          </span>
          <span>
            <img src="img/x86.svg"></img>
          </span>
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

      <div className="right">
        <img src="img/secos.arch.svg"></img>
      </div>
    </div>
  );
}

function HomepageTarget() {
  return (
    <div className="secos-target-container">
      <div className="left">
        <div style={{ position: "relative", zIndex: 2 }}>
          <ul className="secos-target-spec">
            <li>模块 1 模块 1 模块 1  模块 1</li>
            <li>模块 2 模块 2 模块 2</li>
            <li>模块 3 模块 3 模块 3</li>
            <li>模块 4 模块 4 模块 4</li>
          </ul>
        </div>
      </div>
      <div className="middle">
        <img src="img/secos.target.png"></img>
      </div>
      <div className="right">
        <div style={{ position: "relative", zIndex: 2 }}>
          <ul className="secos-target-spec">
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

function HomepageModule() {
  return (
    <div className="secos-module-container">
      <div className="left">
        <img src="img/secos.module.png"></img>
      </div>
      <div className="right">
        <div style={{ position: "relative", zIndex: 2 }}>
          <ul className="secos-banner-spec">
            <li>模块 1</li>
            <li>模块 2</li>
            <li>模块 3</li>
            <li>模块 4</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <Layout title="专注于 AIoT 领域的安全操作系统内核" description="专注于 AIoT 领域的安全操作系统内核">
      <HomepageBanner />

      <HomepageTarget />

      <HomepageModule />

    </Layout>
  );
}

export default Home;
