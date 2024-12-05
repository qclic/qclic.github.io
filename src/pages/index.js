import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Translate, { translate } from '@docusaurus/Translate';
import "./index.css";

function HomepageBanner() {
  return (
    <div className="infisecos-banner-container">
      <div className="infisecos-banner-left">
        <div className="infisecos-banner-title" >
        <Translate>InfisecOS</Translate>
        </div>
        <div className="infisecos-banner-description">
          <Translate>A security operating system focused on the AIoT field</Translate>
        </div>

        <div className="infisecos-banner-feature">
          <ul>
            <li><Translate>Component-based design</Translate></li>
            <li><Translate>Features multiple kernel architecture forms</Translate></li>
            <li><Translate>Support for multiple application scenarios</Translate></li>
            <li><Translate>Developed using the Rust programming language</Translate></li>
            <li><Translate>Supports RTOS, BareMetal, and Linux as subsystems</Translate></li>
            <li><Translate>Adopted the MIT permissive open-source license</Translate></li>
          </ul>
        </div>

        <div className="infisecos-banner-support">
          <p className="infisecos-banner-support-title"><Translate>Multi-architecture support, verified on the following architectures</Translate></p>
          <div className="infisecos-banner-support-icons">
            <span>
              <img src="images/homepage/arm.svg"></img>
            </span>
            <span>
              <img src="images/homepage/x86.svg"></img>
            </span>
          </div>
        </div>

        <div className="infisecos-banner-button">
          <Link className="infisecos-banner-explore-button" to={useBaseUrl("docs/introduction")}>
            <Translate>Getting Started Guide</Translate>
          </Link>

          <Link className="infisecos-banner-download-button" to={useBaseUrl("docs/introduction")}>
            <Translate>Download and Experience</Translate>
          </Link>
        </div>
      </div>

      <div className="infisecos-banner-right">
        <img className="infisecos-banner-content-image" src="images/homepage/infisecos.arch.svg"></img>
      </div>
    </div>
  );
}

function HomepageForm() {
  return (
    <div className="infisecos-form-container">
      <h1 className="text--center infisecos-form-title"><Translate>Multiple kernel architecture forms</Translate></h1>
      <p className="text--center infisecos-form-description"><Translate>It allows flexible combination of various kernel architecture forms</Translate></p>
      <div className="infisecos-form-content">
        <div className="infisecos-form-content-left">
          <img className="infisecos-form-content-image" src="images/homepage/infisecos.form.png"></img>
        </div>
        <div className="infisecos-form-content-right">
          <h2 className="text--center infisecos-form-content-right-title"><Translate>Refine kernel module attributes to form unidirectional dependencies, creating standalone kernel modules</Translate></h2>
          <ul className="infisecos-form-feature">
            <li><Translate>Language-level core libraries independent of the operating system</Translate></li>
            <li><Translate>Operating System-independent component library</Translate></li>
            <li><Translate>Architecture optimization based on configuration and static analysis</Translate></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function HomepageModule() {
  return (
    <div className="infisecos-module-container">
      <h1 className="text--center infisecos-module-title"><Translate>Component-based design</Translate></h1>
      <p className="text--center infisecos-module-description"><Translate>Through the analysis of existing typical OS kernels and our practical experience with multiple kernel modes, we have found that by extracting common functionalities and encapsulating them as independent components, we can create a component repository. Based on this repository, we can freely select the appropriate components and adopt suitable combinations to build various kernel modes, forming a flexible and adaptable approach to kernel development</Translate></p>
      <div className="infisecos-module-content">
        <div className="infisecos-module-content-left">
          <img className="infisecos-module-content-image" src="images/homepage/infisecos.module.png"></img>
        </div>
        <div className="infisecos-module-content-right">
          <h2 className="text--center infisecos-module-content-right-title"><Translate>The component-based design approach will significantly improve kernel development efficiency, kernel product reliability, and more. It also facilitates collaboration among kernel developers based on components</Translate></h2>
          <ul className="infisecos-module-feature">
            <li><Translate>Language-level core libraries independent of the operating system</Translate></li>
            <li><Translate>Operating System-independent component library</Translate></li>
            <li><Translate>Architecture optimization based on configuration and static analysis</Translate></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function HomepageTarget() {
  return (
    <div className="infisecos-target-container">
      <h1 className="text--center infisecos-target-title"><Translate>Multiple application scenarios</Translate></h1>
      <p className="text--center infisecos-target-description"><Translate>Multiple application scenarios. Multiple application scenarios. Multiple application scenarios. Multiple application scenarios. Multiple application scenarios. Multiple application scenarios. Multiple application scenarios</Translate></p>
      <div className="infisecos-target-content">
        <div className="infisecos-target-content-left">
          <h2 className="text--center infisecos-target-content-left-title"><Translate>This is a description of a key feature.</Translate></h2>
          <ul className="infisecos-target-feature">
            <li><Translate>feature 1</Translate></li>
            <li><Translate>feature 2</Translate></li>
            <li><Translate>feature 3</Translate></li>
            <li><Translate>feature 4</Translate></li>
          </ul>
        </div>
        <div className="infisecos-target-content-middle">
          <img className="infisecos-target-content-image" src="images/homepage/infisecos.target.png"></img>
        </div>
        <div className="infisecos-target-content-right">
          <h2 className="text--center infisecos-target-content-right-title"><Translate>By freely combining modules, a kernel can be created that is suitable for different application scenarios. Through the flexible combination of modules, a kernel tailored to various application environments can be formed</Translate></h2>
          <ul className="infisecos-target-feature">
            <li><Translate>feature 1</Translate></li>
            <li><Translate>feature 2</Translate></li>
            <li><Translate>feature 3</Translate></li>
            <li><Translate>feature 4</Translate></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Layout 
      title={translate({message: 'A security operating system focused on the AIoT field'})} 
      description={translate({message: 'A security operating system focused on the AIoT field'})}>

      <HomepageBanner />

      <HomepageForm />

      <HomepageModule />

      <HomepageTarget />

    </Layout>
  );
}
