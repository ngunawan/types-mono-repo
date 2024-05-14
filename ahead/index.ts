export interface AgeGroup {
    id: number;
    displayName: string;
  }
  
  export interface Area {
    id: number;
    geometryId: number;
    fipsCode: string;
    displayName: string;
    stateDisplayName: string;
    abbreviation: string;
    type: 'National' | 'State' | 'County';
    isEHE: boolean;
  }
  
  export interface Disease {
    id: number;
    defaultMeasure: 'count' | 'percentage';
    displayName: string;
  }
  
  export interface Race {
    id: number;
    displayName: string;
  }
  
  export interface Transmission {
    id: number;
    displayName: string;
  }
  
  export interface Sex {
    id: number;
    displayName: string;
  }
  
  export interface Gender {
    id: number;
    displayName: string;
  }
  
  export interface Filter {
    ageGroupId?: string;
    areaId?: string;
    diseaseId?: string;
    genderId?: string;
    raceId?: string;
    transmissionId?: string;
    sexId?: string;
  }
  
  export interface Filters {
    ageGroupId?: string[];
    areaId?: string[];
    diseaseId?: string[];
    genderId?: string[];
    raceId?: string[];
    transmissionId?: string[];
    sexId?: string[];
  }
  
  export interface Stratification {
    ageGroupId: number;
    areaId: number;
    diseaseId: number;
    raceId: number;
    transmissionId: number;
    sexId: number;
    ageGroupDisplayName: string;
    areaDisplayName: string;
    stateDisplayName: string;
    fullAreaDisplayName: string;
    diseaseDisplayName: string;
    raceDisplayName: string;
    transmissionDisplayName: string;
    sexDisplayName: string;
    genderId?: string;
    genderDisplayName?: string;
  }
  
  export interface Year {
    id: number;
    year: string;
    startDate: string;
    endDate: string;
  }
  export interface Goal {
    year: string;
    value?: number | null;
    percentage: string;
    note: boolean;
  }
  
  export type DataType =
    | 'provisional'
    | 'preliminaryForYear'
    | 'preliminaryForQuarter';
  
  export interface Data {
    id: number;
    ageGroupId: number;
    areaId: number;
    diseaseId: number;
    genderId: number;
    raceId: number;
    sexId: number;
    yearId: number;
    cases: number | null;
    population: number;
    rate: number | string | null;
    suppressionRate: number;
    suppressionCases: number;
    lci: number;
    uci: number;
    rse: number;
    caseLci: number;
    caseUci: number;
    ageGroup: AgeGroup;
    area: Area;
    disease: Disease;
    gender: Gender;
    race: Race;
    sex: Sex;
    transmission: Transmission;
    year: Year;
    type: DataType;
  }
  
  export interface DataWrapper {
    goals: Goal[];
    data: Data[];
  }
  
  export interface CaseCounts {
    filters: Filters;
    strats: Stratification[];
    data: DataWrapper[];
  }
  