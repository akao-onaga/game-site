export interface DialogueLine {
  speaker: "akao" | "onaga";
  text: string;
}

export interface ControlItem {
  label?: string;
  text: string;
}

export interface GameTranslation {
  title: string;
  catch: string;
  genre: string;
  dialogue: DialogueLine[];
  features: string[];
  controls?: ControlItem[];
  notes?: string[];
}
