export interface SoftwareVersion {
  name: string;
  version: string;
  description: string;
  releaseDate: string;
  imageClass: string;
  isTargetVersion?: boolean;
}

export const softwareVersions: SoftwareVersion[] = [
  { 
    name: 'Ableton Live', 
    version: '12',
    description: 'The latest version with advanced features for professional music production',
    releaseDate: 'January 2024',
    imageClass: 'abletonLive12',
    isTargetVersion: false
  },
  { 
    name: 'Ableton Live', 
    version: '11',
    description: 'Powerful music creation and performance with innovative tools',
    releaseDate: 'March 2023',
    imageClass: 'abletonLive11',
    isTargetVersion: false
  },
  { 
    name: 'Ableton Live', 
    version: '10',
    description: 'Stable and reliable platform for music production and live performances',
    releaseDate: 'October 2022',
    imageClass: 'abletonLive10',
    isTargetVersion: true
  },
];

export const getVersionSlug = (software: SoftwareVersion) => 
  `${software.name.toLowerCase().replace(' ', '-')}-${software.version}`;

export const getTargetVersion = () => 
  softwareVersions.find(software => software.isTargetVersion === true); 