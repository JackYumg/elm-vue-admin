import { ElMessage } from "element-plus"

export const showWarning = (message: string) => {
    return ElMessage({
        message,
        type: 'warning'
    });
}

export const showError = (message: string) => {
    return ElMessage({
        message,
        type: 'error'
    })
}