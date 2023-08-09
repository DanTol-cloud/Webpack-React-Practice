
type Mods = Record<string, boolean | string>

const ClassName = (cls: string, mods: Mods = {}, additional: string[] = []): string => {

    return [
        cls,
        ...additional.filter(() => Boolean(true)),
    ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className)
    ].join(' ');
}

export default ClassName
