import { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Image from 'components/Image';
import { useScrollRestore } from 'hooks';
import Footer from 'components/Footer';
import {
  ProjectContainer,
  ProjectSection,
  ProjectSectionContent,
  ProjectImage,
  ProjectTextRow,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectBackground,
  ProjectHeader,
  ProjectSectionColumns,
} from 'components/ProjectLayout';
import sliceBackground from 'assets/slice-background.jpg';
import sliceBackgroundLarge from 'assets/slice-background-large.jpg';
import sliceBackgroundPlaceholder from 'assets/slice-background-placeholder.jpg';
import sliceApp from 'assets/slice-app.jpg';
import sliceAppLarge from 'assets/slice-app-large.jpg';
import sliceAppPlaceholder from 'assets/slice-app-placeholder.jpg';
import sliceSidebarLayers from 'assets/slice-sidebar-layers.png';
import sliceSidebarLayersLarge from 'assets/slice-sidebar-layers-large.png';
import sliceSidebarLayersPlaceholder from 'assets/slice-sidebar-layers-placeholder.png';
import sliceSidebarAnnotations from 'assets/slice-sidebar-annotations.png';
import sliceSidebarAnnotationsLarge from 'assets/slice-sidebar-annotations-large.png';
import sliceSidebarAnnotationsPlaceholder from 'assets/slice-sidebar-annotations-placeholder.png';
import sliceSlides from 'assets/slice-slides.jpg';
import sliceSlidesLarge from 'assets/slice-slides-large.jpg';
import sliceSlidesPlaceholder from 'assets/slice-slides-placeholder.jpg';
import sliceBackgroundBar from 'assets/slice-background-bar.jpg';
import sliceBackgroundBarLarge from 'assets/slice-background-bar-large.jpg';
import sliceBackgroundBarPlaceholder from 'assets/slice-background-bar-placeholder.jpg';
import sliceAnnotation from 'assets/slice-annotation.png';
import sliceAnnotationLarge from 'assets/slice-annotation-large.png';
import sliceAnnotationPlaceholder from 'assets/slice-annotation-placeholder.png';
import prerender from 'utils/prerender';
import { media } from 'utils/style';
import './index.css';

const title = 'Never Limit Yourself';
const description =
  'Travel, Exploration & Kindness will take you places you have not yet dreamt of.';
const roles = ['Social Worker', 'Explorer', 'Cinematographer'];

const ProjectSlice = () => {
  useScrollRestore();

  return (
    <Fragment>
      <Helmet>
        <title>{`Projects | ${title}`}</title>
        <meta name="description" content={description} />
      </Helmet>
      <ProjectContainer className="slice">
        <ProjectBackground
          srcSet={`${sliceBackground} 1280w, ${sliceBackgroundLarge} 2560w`}
          placeholder={sliceBackgroundPlaceholder}
          opacity={0.8}
          entered={!prerender}
        />
        <ProjectHeader title={title} description={description} roles={roles} />
        <ProjectSection first>
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${sliceApp} 800w, ${sliceAppLarge} 1920w`}
              placeholder={sliceAppPlaceholder}
              alt="The Slice web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className="slice__columns">
            <div className="sidebar__images-text">
              <ProjectSectionHeading>Community</ProjectSectionHeading>
              <ProjectSectionText>
                Had the privilege to work with some extraordinary people in making our
                society a better place. Part of our mission was to educate the
                underprivileged & help them through various means.
              </ProjectSectionText>
              <ProjectSectionText>
                Our solution was to set up StreetKaksha's in the slums where we mobilize
                volunteers as teachers to provide kids with basic education.
                <p>
                  <a
                    style={{ color: '#85C88A', textDecorationLine: 'underline' }}
                    href="https://www.instagram.com/ourswapna/"
                  >
                    Meet Team Swapna!
                  </a>
                </p>
              </ProjectSectionText>
            </div>
            <div className="slice__sidebar-images">
              <Image
                className="slice__sidebar-image"
                srcSet={`${sliceSidebarLayers} 300w, ${sliceSidebarLayersLarge} 700w`}
                placeholder={sliceSidebarLayersPlaceholder}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className="slice__sidebar-image"
                srcSet={`${sliceSidebarAnnotations} 300w, ${sliceSidebarAnnotationsLarge} 700w`}
                placeholder={sliceSidebarAnnotationsPlaceholder}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Making Travel Impactful</ProjectSectionHeading>
              <ProjectSectionText>
                At{' '}
                <a
                  href="https://www.instagram.com/volunteeryatra/"
                  style={{ color: '#EBD671', textDecorationLine: 'underline' }}
                >
                  VolunteerYatra
                </a>
                , we are trying to solve the problem of rural migration by creating
                opportunities in remote areas. Anyone with a required skill can volunteer
                & in return receive benefits such as stay, food & a beautiful place to be
                at.
                <p>
                  Before joining the team as a <b>Technical Head</b>, I volunteered as a{' '}
                  <b>Cinematographer</b> to document a trek.
                  <p>
                    <a
                      href="https://www.instagram.com/tv/CXRK11ppFpR/"
                      style={{ color: 'white', textDecorationLine: 'underline' }}
                    >
                      Watch the Reel
                    </a>
                  </p>
                </p>
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${sliceSlides} 200w, ${sliceSlidesLarge} 520w`}
              placeholder={sliceSlidesPlaceholder}
              alt="The new My Slides tab in slice, showing annotated and favorited slides."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent className="slice__grid">
            <div className="slice__grid-image">
              <div className="slice__grid-background">
                <Image
                  srcSet={`${sliceBackgroundBar} 400w, ${sliceBackgroundBarLarge} 898w`}
                  placeholder={sliceBackgroundBarPlaceholder}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
              <div className="slice__grid-foreground">
                <Image
                  srcSet={`${sliceAnnotation} 440w, ${sliceAnnotationLarge} 880w`}
                  placeholder={sliceAnnotationPlaceholder}
                  alt="An annotation preview popover with statistics for shape perimeter and area."
                  sizes={`(max-width: ${media.mobile}px) 584px, (max-width: ${media.tablet}px) 747px, 556px`}
                />
              </div>
            </div>
            <div className="slice__grid-text">
              <ProjectSectionHeading>
                Being An <b style={{ color: '#037ef3' }}>AIESECer</b>
              </ProjectSectionHeading>
              <ProjectSectionText>
                My love for communities started with being a part of AIESEC, a global
                youth run organization that cultivates leadership in individuals. Amount
                of amazing peple that I got to meet was overwhelming & inspiring.
                <p>Once an AIESECer, always an AIESECer!</p>
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};

export default ProjectSlice;
