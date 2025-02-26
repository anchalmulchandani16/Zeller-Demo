export interface SearchInputProps {
  /** The current value of the input field */
  value: string;

  /** Callback function triggered when text changes */
  onChangeText: (text: string) => void;

  /** Placeholder text for the input field (optional) */
  placeholder?: string;
}
