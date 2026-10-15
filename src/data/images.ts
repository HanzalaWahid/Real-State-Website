import heroDoha from "@/assets/hero-doha.jpg";
import projectPearl from "@/assets/project-pearl.jpg";
import projectLusail from "@/assets/project-lusail.jpg";
import projectMsheireb from "@/assets/project-msheireb.jpg";
import propVilla from "@/assets/prop-villa.jpg";
import propApartment from "@/assets/prop-apartment.jpg";
import propOffice from "@/assets/prop-office.jpg";
import propPenthouse from "@/assets/prop-penthouse.jpg";
import propTownhouse from "@/assets/prop-townhouse.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import ctaAerial from "@/assets/cta-aerial.jpg";
import textureFacade from "@/assets/texture-facade.jpg";
import projectCanalBay from "@/assets/project-canal-bay.jpg";
import canalBayBalcony from "@/assets/canal-bay-balcony.jpg";
import canalBayWaterfront from "@/assets/canal-bay-waterfront.jpg";
import canalBayPlayArea from "@/assets/canal-bay-play-area.jpg";
import projectCarltonHouse from "@/assets/project-carlton-house.jpg";
import carltonHouseBedroom from "@/assets/carlton-house-bedroom.jpg";
import carltonHouseLivingRoom from "@/assets/carlton-house-living-room.jpg";
import carltonHouseBathroom from "@/assets/carlton-house-bathroom.jpg";
import projectEliteResidence from "@/assets/project-elite-residence.jpg";
import eliteResidencePool from "@/assets/elite-residence-pool.jpg";
import eliteResidenceLobby from "@/assets/elite-residence-lobby.jpg";
import projectRawahResidence from "@/assets/project-rawah-residence.jpg";
import rawahResidenceLobby from "@/assets/rawah-residence-lobby.jpg";
import rawahResidencePool from "@/assets/rawah-residence-pool.jpg";
import rawahResidenceGym from "@/assets/rawah-residence-gym.jpg";

const galleryImages = (files: Record<string, string>, excludedPages: number[] = []) =>
  Object.entries(files)
    .sort(([left], [right]) => left.localeCompare(right))
    .filter(([path]) => {
      const page = Number(path.match(/page-(\d+)-/)?.[1]);
      return !excludedPages.includes(page);
    })
    .map(([, image]) => image);

const floorPlanImages = (files: Record<string, string>) =>
  Object.entries(files)
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([, image]) => image);

const canalBayGalleryFiles = import.meta.glob<string>(
  "../assets/projects/canal-bay/gallery/*.jpg",
  { eager: true, import: "default", query: "?url" },
);
const carltonHouseGalleryFiles = import.meta.glob<string>(
  "../assets/projects/carlton-house/gallery/*.jpg",
  { eager: true, import: "default", query: "?url" },
);
const eliteResidenceGalleryFiles = import.meta.glob<string>(
  "../assets/projects/elite-residence/gallery/*.jpg",
  { eager: true, import: "default", query: "?url" },
);
const rawahResidenceGalleryFiles = import.meta.glob<string>(
  "../assets/projects/rawah-residence/gallery/*.jpg",
  { eager: true, import: "default", query: "?url" },
);

const canalBayFloorPlanFiles = import.meta.glob<string>(
  "../assets/projects/canal-bay/floor-plans/*.jpg",
  { eager: true, import: "default", query: "?url" },
);
const carltonHouseFloorPlanFiles = import.meta.glob<string>(
  "../assets/projects/carlton-house/floor-plans/*.jpg",
  { eager: true, import: "default", query: "?url" },
);
const eliteResidenceFloorPlanFiles = import.meta.glob<string>(
  "../assets/projects/elite-residence/floor-plans/*.jpg",
  { eager: true, import: "default", query: "?url" },
);
const rawahResidenceFloorPlanFiles = import.meta.glob<string>(
  "../assets/projects/rawah-residence/floor-plans/*.jpg",
  { eager: true, import: "default", query: "?url" },
);

export const img = {
  heroDoha,
  projectPearl,
  projectLusail,
  projectMsheireb,
  propVilla,
  propApartment,
  propOffice,
  propPenthouse,
  propTownhouse,
  aboutTeam,
  ctaAerial,
  textureFacade,
  projectCanalBay,
  canalBayBalcony,
  canalBayWaterfront,
  canalBayPlayArea,
  projectCarltonHouse,
  carltonHouseBedroom,
  carltonHouseLivingRoom,
  carltonHouseBathroom,
  projectEliteResidence,
  eliteResidencePool,
  eliteResidenceLobby,
  projectRawahResidence,
  rawahResidenceLobby,
  rawahResidencePool,
  rawahResidenceGym,
  canalBayGallery: galleryImages(canalBayGalleryFiles, [7, 11, 14, 17, 21]),
  carltonHouseGallery: galleryImages(carltonHouseGalleryFiles),
  eliteResidenceGallery: galleryImages(eliteResidenceGalleryFiles, [4, 7]),
  rawahResidenceGallery: galleryImages(rawahResidenceGalleryFiles),
  canalBayFloorPlans: floorPlanImages(canalBayFloorPlanFiles),
  carltonHouseFloorPlans: floorPlanImages(carltonHouseFloorPlanFiles),
  eliteResidenceFloorPlans: floorPlanImages(eliteResidenceFloorPlanFiles),
  rawahResidenceFloorPlans: floorPlanImages(rawahResidenceFloorPlanFiles),
};
