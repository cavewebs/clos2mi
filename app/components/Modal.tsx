import * as React from "react"
import { View, StyleSheet, Modal } from "react-native"
import { observer } from "mobx-react-lite"
import { Text } from "app/components/Text"
import { Button } from "./Button"
import { useNavigation } from "@react-navigation/native"

export interface ModalProps {
  /**
   * An optional style override useful for padding & margin.
   */
  showModal: boolean
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  modalTitle: string
  modalBody: string
  modalCancelButtonText: string
  modalAcceptButtonText: string
  navigate?: () => void;
}

/**
 * Describe your component here
 */
export const Modals = observer(function Modals(props: ModalProps) {
  const navigation = useNavigation()

  const {
    showModal,
    setShowModal,
    modalTitle,
    modalBody,
    modalCancelButtonText,
    modalAcceptButtonText,
    navigate,
  } = props

  return (
    <Modal
      visible={showModal}
      onRequestClose={() => {
        setShowModal(false)
      }}
      animationType="slide"
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>{modalTitle}</Text>
          <Text style={styles.body}>{modalBody}</Text>

          <View style={styles.buttonContainer}>
            <Button style={styles.cancelButton} onPress={() => setShowModal(false)}>
              <Text style={styles.cancelButtonText}>{modalCancelButtonText}</Text>
            </Button>
            <Button
              style={styles.acceptButton}
              onPress={() => {
                navigate && navigate();
                setShowModal(false)
              }}
            >
              <Text style={styles.acceptButtonText}>{modalAcceptButtonText}</Text>
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  )
})

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end",
  },
  container: {
    backgroundColor: "#F9FAFB",
    padding: 20,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
    color: "#1F2937",
    marginBottom: 16,
  },
  body: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "500",
    color: "#6B7280",
    marginBottom: 24,
  },
  cancelButton: { borderRadius: 24, border: "#D0D5DD", backgroundColor: "#F9FAFB", width: "48%" },
  cancelButtonText: { fontSize: 14, fontWeight: "500", color: "#374151" },
  acceptButton: {
    borderRadius: 24,
    backgroundColor: "#2895FE",
    borderColor: "#2895FE",
    width: "48%",
  },
  acceptButtonText: { fontSize: 14, fontWeight: "500", color: "#F9FAFB" },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    justifyContent: "space-between",
  },
})
