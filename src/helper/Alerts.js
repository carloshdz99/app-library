import Swal from 'sweetalert2'

export const toastAlert = (icon, title) => {
    return Swal.fire({
        position: 'top-end',
        icon: icon,
        title: title,
        showConfirmButton: false,
        timer: 1500
    })
}