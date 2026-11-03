import Image from "next/image"

export function Logo() {
  return (
    <>
      <Image
        src="/softcloudstudio-logo.svg"
        alt="SoftCloud Studio"
        width={180}
        height={40}
        className="dark:hidden"
      />
      <Image
        src="/softcloudstudio-logo-dark.svg"
        alt="SoftCloud Studio"
        width={180}
        height={40}
        className="hidden dark:block"
      />
    </>
  )
}
