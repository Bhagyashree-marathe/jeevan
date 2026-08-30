import { QRCodeCanvas } from "qrcode.react"

interface PatientQRCodeProps {
  onBack: () => void
}

function PatientQRCode({ onBack }: PatientQRCodeProps) {
  const patient = {
    name: "Radhika Avhad",
    healthId: "JEEVAN-2026-001",
    bloodGroup: "O+",
  }

  const qrData = patient.healthId

  // Download QR Code
  const downloadQRCode = () => {
    const canvas = document.getElementById(
      "patient-qr-code"
    ) as HTMLCanvasElement | null

    if (!canvas) return

    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream")

    const downloadLink = document.createElement("a")

    downloadLink.href = pngUrl
    downloadLink.download = `${patient.healthId}-QR.png`

    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)
  }

  // Share QR Code
  const shareQRCode = async () => {
    const shareText = `Jeevan Health ID
Health ID: ${patient.healthId}
Name: ${patient.name}`

    try {
      if (navigator.share) {
        await navigator.share({
          title: "Jeevan Health ID",
          text: shareText,
        })
      } else {
        await navigator.clipboard.writeText(shareText)

        alert("Health ID details copied to clipboard.")
      }
    } catch (error) {
      console.log("Share cancelled or failed:", error)
    }
  }

  return (
    <div className="min-h-screen bg-blue-50 p-6">

      <div className="mx-auto max-w-2xl">

        {/* ================= HEADER ================= */}

        <div className="mb-6">

          <button
            type="button"
            onClick={onBack}
            className="mb-4 text-blue-600 font-semibold hover:text-blue-800"
          >
            ← Back
          </button>

          <h1 className="text-3xl font-bold text-blue-800">
            My Health ID
          </h1>

          <p className="mt-1 text-gray-600">
            Your secure Jeevan Health ID and QR code
          </p>

        </div>


        {/* ================= MAIN CARD ================= */}

        <div className="rounded-2xl bg-white p-6 shadow-lg">


          {/* ================= PATIENT INFORMATION ================= */}

          <div className="mb-6 rounded-xl bg-blue-50 p-5">

            <h2 className="mb-4 text-xl font-semibold text-gray-800">
              Patient Information
            </h2>

            <div className="space-y-3">

              {/* Name */}

              <div className="flex justify-between border-b pb-2">

                <span className="text-gray-500">
                  Name
                </span>

                <span className="font-medium text-gray-800">
                  {patient.name}
                </span>

              </div>


              {/* Health ID */}

              <div className="flex justify-between border-b pb-2">

                <span className="text-gray-500">
                  Health ID
                </span>

                <span className="font-medium text-blue-700">
                  {patient.healthId}
                </span>

              </div>


              {/* Blood Group */}

              <div className="flex justify-between">

                <span className="text-gray-500">
                  Blood Group
                </span>

                <span className="font-medium text-gray-800">
                  {patient.bloodGroup}
                </span>

              </div>

            </div>

          </div>


          {/* ================= QR CODE ================= */}

          <div className="flex flex-col items-center">

            <h2 className="mb-2 text-xl font-semibold text-gray-800">
              Your QR Code
            </h2>

            <p className="mb-5 text-center text-sm text-gray-500">
              Scan this QR code to access your Jeevan Health ID
            </p>


            <div className="rounded-2xl border-4 border-blue-100 bg-white p-5 shadow-md">

              <QRCodeCanvas
                id="patient-qr-code"
                value={qrData}
                size={220}
                bgColor="#ffffff"
                fgColor="#111827"
                level="H"
              />

            </div>


            <p className="mt-4 font-semibold text-blue-700">
              {patient.healthId}
            </p>

          </div>


          {/* ================= SECURITY NOTICE ================= */}

          <div className="mt-6 rounded-xl border border-yellow-200 bg-yellow-50 p-4">

            <p className="text-sm text-yellow-800">

              🔒 <strong>Privacy:</strong> Only authorized healthcare
              professionals can access protected medical information through
              Jeevan Health ID.

            </p>

          </div>


          {/* ================= BUTTONS ================= */}

          <div className="mt-6 grid gap-3 sm:grid-cols-2">

            <button
              type="button"
              onClick={downloadQRCode}
              className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Download QR
            </button>


            <button
              type="button"
              onClick={shareQRCode}
              className="rounded-xl border-2 border-blue-600 px-5 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
            >
              Share Health ID
            </button>

          </div>

        </div>


        {/* ================= INFORMATION ================= */}

        <div className="mt-6 rounded-2xl bg-white p-5 shadow-md">

          <h2 className="mb-2 font-semibold text-gray-800">
            How to use your Health ID
          </h2>

          <ul className="space-y-2 text-sm text-gray-600">

            <li>
              ✓ Show this QR code at a registered healthcare facility.
            </li>

            <li>
              ✓ Healthcare professionals can scan your Health ID.
            </li>

            <li>
              ✓ Your medical information is shared based on access permissions.
            </li>

            <li>
              ✓ Keep your Health ID secure.
            </li>

          </ul>

        </div>

      </div>

    </div>
  )
}

export default PatientQRCode