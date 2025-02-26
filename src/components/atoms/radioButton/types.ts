export interface RadioButtonProps {
  /**
   * This should match one of the available roles in the `roles` array.
   */
  selected: boolean;

  /**
   * Function to update the selected role.
   * It takes a role string as an argument and updates the selection state.
   * @param role - The role to be set as selected.
   */
  onPress: () => void;

  /**
   * Array of available roles to be displayed as options.
   * Example: ["ADMIN", "MANAGER"]
   */
  label: string;
}
