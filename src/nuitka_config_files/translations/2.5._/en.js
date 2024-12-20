// noinspection JSUnusedGlobalSymbols
/**
 * 英文翻译文件
 * @author erduotong
 */
export default {
    "title": {
        "basic": "Basic Settings",
        "control_the_inclusion_of_modules_and_packages_in_result": "Control the Inclusion of Modules and Packages in Result",
        "control_the_following_into_imported_modules": "Control the Following into Imported Modules",
        "onefile_options": "Onefile Options",
        "data_files": "Data Files",
        "metadata_support": "Metadata Support",
        "DLL_files": "DLL (Dynamic Link Library) Files",
        "Linux_specific_controls": "Linux Specific Controls",
        "control_the_warnings_to_be_given_by_Nuitka": "Control the Warnings to be Given by Nuitka",
        "immediate_execution_after_compilation": "Immediate Execution After Compilation",
        "compilation_choices": "Compilation Choices",
        "output_choices": "Output Choices",
        "deployment_control": "Deployment Control",
        "environment_control": "Environment Control",
        "debug_features": "Debug Features",
        "nuitka_development_features": "Nuitka Development Features",
        "backend_c_compiler_choice": "Backend C Compiler Choice",
        "cache_control": "Cache Control",
        "PGO_compilation_choices": "PGO (Profile Guided Optimization) Compilation Choices",
        "tracing_features": "Tracing Features",
        "general_os_controls": "General OS Controls",
        "windows_specific_controls": "Windows Specific Controls",
        "macOS_specific_controls": "macOS Specific Controls",
        "binary_version_information": "Binary Version Information",
        "plugin_control": "Plugin Control",
        "cross_compilation": "Cross Compilation",
        "plugin_options_of_anti_bloat": "Anti-Bloat Plugin Options",
        "plugin_options_of_playwright": "Playwright Plugin Options",
        "plugin_options_of_spacy": "Spacy Plugin Options",
    },
    "module": {
        "name": "Module Mode",
        "desc": "Create an importable binary extension module executable instead of a program. Disabled by default.",
    },
    "mode": {
        "name": "Mode",
        "desc": "The mode to use for compilation",
        "elements": {
            "accelerated": {
                "name": "Accelerated Mode",
                "desc": "Accelerated mode will execute in your Python installation and will depend on it. This is the default mode.",
            },
            "standalone": {
                "name": "Standalone Mode",
                "desc": "Standalone mode will create a folder with an executable to run it.",
            },
            "onefile": {
                "name": "Onefile Mode",
                "desc": "Onefile mode creates a single executable for deployment.",
            },
        },
    },
    "standalone": {
        "name": "Standalone Mode",
        "desc": "Enable standalone mode for output. This allows you to transfer the binary to other machines without needing the existing Python environment. This also means it will become large.\nIt will enable these options: \"--follow-imports\" and \"--python-flag=no_site\".",
    },
    "onefile": {
        "name": "Onefile Mode",
        "desc": "On top of standalone mode, enable onefile mode. This means that instead of a folder, a compressed executable is created and used.",
    },
    "python_flag": {
        "name": "Python Flag",
        "desc": "The Python flags to use. Default is what you used to run Nuitka, which forces a specific mode. These are also options present in the standard Python executable.",
        "elements": {
            "s": {
                "name": "No site-packages directory",
                "desc": "Alias for no_site",
            },
            "static_hashes": {
                "name": "Static Hashes",
                "desc": "Do not use hash randomization",
            },
            "no_warnings": {
                "name": "Disable Warnings",
                "desc": "Do not give warnings from the Python runtime",
            },
            "o": {
                "name": "No error checking",
                "desc": "Do not include any debug/error checking (assert) statements",
            },
            "no_docstrings": {
                "name": "No Docstrings",
                "desc": "Do not include docstrings",
            },
            "u": {
                "name": "Unbuffered",
                "desc": "Alias for unbuffered, do not use buffering",
            },
            "isolated": {
                "name": "No external code loading",
                "desc": "Do not load external code",
            },
            "m": {
                "name": "Package Mode",
                "desc": "Package mode, compile as \"package.__main__\"",
            },
        },
    },
    "python_debug": {
        "name": "Python Debug",
        "desc": "Whether to use the debug version. Default is what you used to run Nuitka, which is likely a non-debug version. Only for debugging and testing purposes.",
    },
    "python_for_scons": {
        "name": "Python Path for Scons",
        "desc": "When compiling with Python 3.4, provide a Python binary path for Scons to use. Otherwise, Nuitka can use the Python you used to run Nuitka,\nor find the Nuitka installation itself, e.g. from the Windows registry. On Windows, Python 3.5 or higher is required, on non-Windows, Python 2.6 or Python 2.7 can also be used.",
    },
    "main": {
        "name": "Main Program Path",
        "desc": "If specified only once (e.g., --main=\"1.py\"), this will override the positional argument, which is the filename (entry) to compile.\nIf specified multiple times (e.g., --main=\"1.py\" --main=\"2.py\"), it will enable \"multidist\", which allows you to create binaries that depend on the filename or call name.\n(Allows multiple main programs with the same compilation parameters)\n",
    },
    "include_package": {
        "name": "Include Package",
        "desc": "Include an entire package. Given in the form of a Python namespace, e.g., 'some_package.sub_package',\nNuitka will find it and include all modules found below its disk location in the created binary or extension module and make them importable by the code.\nTo avoid unwanted sub-packages, e.g., tests, you can do '--nofollow-import-to=*.tests'. Default is empty.\n(Note: Inclusion here means compiling the package or module into the binary and making it importable, not treating it as a dependency)\n",
    },
    "include_module": {
        "name": "Include Module",
        "desc": "Include a single module. Given in the form of a Python namespace, e.g., 'some_package.some_module', Nuitka will find it and include it in the created binary or extension module\nand make it importable by the code. Default is empty",
    },
    "include_plugin_directory": {
        "name": "Include Plugin Directory",
        "desc": "Include code found in this directory as if it were each the main file. This overrides other include options.\nYou should prefer other include options. They find things by name rather than by filename, and these options can find things in 'sys.path'.\nThis option is only for very special use cases. Can be given multiple times. Default is empty.",
    },
    "include_plugin_files": {
        "name": "Include Plugin Files",
        "desc": "Include files matching PATTERN. Overrides all other follow options. Can be given multiple times. Default is empty",
    },
    "prefer_source_code": {
        "name": "Prefer Source Code",
        "desc": "For already compiled extension modules, if there is both source code and extension module available, usually the extension module is used,\nbut for best performance, it is best to compile the module from the available source code.\nIf not desired, you can use --no-prefer-source-code to disable warnings about this. Disabled by default.",
    },
    "follow_imports": {
        "name": "Follow Imports",
        "desc": "Follow all imported modules. Enabled by default in standalone mode, otherwise disabled",
    },
    "follow_import_to": {
        "name": "Follow Import to Module",
        "desc": "Follow to this module if used, or if it is a package, follow to the entire package. Can be given multiple times. Default is empty.",
    },
    "nofollow_import_to": {
        "name": "Do Not Follow Import to Module",
        "desc": "Do not follow to this module name even if used, or if it is a package name, do not follow to the entire package, this option overrides all other options.\nThis can also contain patterns, e.g., \"*.tests\". Can be given multiple times. Default is empty.",
    },
    "nofollow_imports": {
        "name": "Do Not Follow All Imports",
        "desc": "Do not recurse into any imported modules at all. This will override all other include options and cannot be used in standalone mode. Disabled by default.",
    },
    "follow_stdlib": {
        "name": "Follow Standard Library Imports",
        "desc": "Also recurse into modules imported from the standard library. This will greatly increase compilation time and is not well tested at times, sometimes it may not work. Disabled by default.",
    },
    "onefile_tempdir_spec": {
        "name": "Onefile Tempdir Location",
        "desc": "In onefile mode, use this as the folder to unpack to.\nUsing a string like '{CACHE_DIR}/{COMPANY}/{PRODUCT}/{VERSION}' is a good static cache path and it will not be deleted.",
        "elements": {
            "user_tempdir": {
                "name": "User Tempdir",
                "desc": "Use the user's temp directory",
            },
        },
    },
    "onefile_child_grace_time": {
        "name": "Onefile Child Grace Time",
        "desc": "When stopping child processes, e.g., due to CTRL-C or closing, Python code gets a \"KeyboardInterrupt\" which may handle events like flushing data.\nThis is the amount of time before hard killing the child processes. The unit is milliseconds, default is 5000.",
    },
    "onefile_no_compression": {
        "name": "No Compression Onefile",
        "desc": "Disable payload compression when creating onefile. This is mostly for debugging purposes or to save time. Disabled by default",
    },
    "onefile_as_archive": {
        "name": "Onefile as Archive",
        "desc": "When creating onefile, use an archive format that can be unpacked by \"nuitka-onefile-unpack\" instead of a stream that only the onefile program itself can unpack.",
    },
    "include_package_data": {
        "name": "Include Package Data",
        "desc": "Include data files for the given package. DLLs and extension modules are not data files and will not be included like this.\nBy default, package data files are not included, but package configurations can do this. This will only include non-DLL and non-extension modules, i.e., actual data files.\nAfter \":\", you can also give filename patterns to only select matching files. Examples: \"--include-package-data=package_name\" (all files)\n--include-package-data=package_name=*.txt\" (only certain types) \"--include-package-data=package_name=some_filename.dat (specific file)\nDefault is empty.",
    },
    "include_data_files": {
        "name": "Include Data Files",
        "desc": "Include data files by assigned filenames. There are many allowed forms.\nUsing \"--include-data-files=/path/to/file/.txt=folder_name/some.txt\" will copy one file, if there are ten or more files, it will error.\nUsing \'--include-data-files=/path/to/files/.txt=folder_name/\' will put all matching files into that folder.\nFor recursive copying, there is a form with three values: \'--include-data-files=/path/to/scan=folder_name=/**/*.txt\', which will preserve the directory structure.\nDefault is empty.",
    },
    "include_data_dir": {
        "name": "Include Data Directory",
        "desc": "Include the entire directory of data files in the distribution. This is recursive.\nIf you want non-recursive inclusion, check '--include-data-files' with patterns.\nFor example, \'--include-data-dir=/path/some_dir=data/some_dir\' for a plain copy of the entire directory.\nAll non-code files will be included, and you can also use the '--noinclude-data-files' option to remove them.\nDefault is empty",
    },
    "noinclude_data_files": {
        "name": "Do Not Include Data Files",
        "desc": "Do not include data files matching the given filename patterns. This is for target filenames, not source paths.\nSo to ignore a file pattern from the package data of 'package_name', it should match as \"package_name/*.txt\",\nor for an entire directory simply use \"package_name\". Default is empty",
    },
    "include_onefile_external_data": {
        "name": "Include Onefile External Data",
        "desc": "Include the specified data file patterns externally in the onefile binary rather than internally. This option only makes sense with '--onefile' compilation.\nFirst, files must be specified in some way to be included, then this option refers to the target path in the distribution. Default is empty.",
    },
    "list_package_data": {
        "name": "List Package Data",
        "desc": "Output the data files found for the given package name. Default is not executed",
    },
    "include_raw_dir": {
        "name": "Include Raw Directory",
        "desc": "Include the raw directory entirely in the distribution. This is recursive. Check '--include-data-dir' for the correct option. Default is empty.",
    },
    "include_distribution_metadata": {
        "name": "Include Distribution Metadata",
        "desc": "Include metadata information for the given distribution name. Some packages check for the existence of metadata, version, entry points, etc., and without these options,\nit will only work if recognized at compile time, which is not always the case.\nOf course, this only makes sense for packages included in the compilation. Default is empty.",
    },
    "noinclude_dlls": {
        "name": "Do Not Include DLLs",
        "desc": "Do not include DLLs matching the given filename patterns. This is for target filenames, not source paths.\nSo to ignore a DLL 'someDLL' included in the 'package_name' package, it should match as 'package_name/someDLL.*'.\nDefault is empty.",
    },
    "list_package_dlls": {
        "name": "List Package DLLs",
        "desc": "Find and output the DLLs for the given package name. Default is not executed.",
    },
    "warn_implicit_exceptions": {
        "name": "Warn Implicit Exceptions",
        "desc": "Enable warnings for implicit exceptions detected at compile time.",
    },
    "warn_unusual_code": {
        "name": "Warn Unusual Code",
        "desc": "Enable warnings for unusual code detected at compile time.",
    },
    "assume_yes_for_downloads": {
        "name": "Assume Yes for Downloads",
        "desc": "Allow Nuitka to download external code when needed. For example, dependency walker, ccache, or even gcc on Windows. To disable, redirect input from the null device.\nFor example, \"</dev/null\" or \"<NUL:\". Default is to prompt for download.",
    },
    "nowarn_mnemonic": {
        "name": "Do Not Warn Mnemonic",
        "desc": "Disable warnings for the given mnemonic. These are to ensure you know about certain topics and usually point to the Nuitka website. The mnemonic is the part at the end of the URL, without the HTML suffix.\nCan be given multiple times and accepts shell patterns. Default is empty.",
    },
    "run": {
        "name": "Run Immediately",
        "desc": "Immediately execute the created binary file (or import the compiled module). Disabled by default.",
    },
    "debugger": {
        "name": "Run in Debugger",
        "desc": "Execute in a debugger, e.g., \"gdb\" or \"lldb\" to automatically get a stack trace. Disabled by default.",
    },
    "user_package_configuration_files": {
        "name": "User Package Configuration Files",
        "desc": "User-provided Yaml files containing package configurations. You can include DLL files, remove redundancies, add hidden dependencies. Please consult the Nuitka package configuration manual\nfor full format usage instructions. Can be given multiple times. Default is empty.",
    },
    "full_compat": {
        "name": "Full CPython Compatibility",
        "desc": "Ensure absolute compatibility with CPython. Even disallow minor deviations from CPython behavior, such as worse tracebacks or exception messages.\nThese behaviors are not truly incompatible but merely different or worse. This is only for testing and should not be used.",
    },
    "file_reference_choice": {
        "name": "File Reference Choice",
        "desc": "Choose the value for \"__file__\". Created binaries and modules \"at runtime\" (i.e., standalone binaries and module mode) use their own location to deduct the value for \"__file__\".\nIncluded packages pretend to be in directories below that location. This allows including data files in deployments.\nIf just for speedup, it is better to use the \"original\" value, where the source file location is used. When using \"frozen\", the symbolic value \"<frozen module_name>\" is used.\nFor compatibility reasons, the \"__file__\" value will always have a \".py\" suffix, regardless of its actual value.",
        "elements": {
            "original": {
                "name": "Original",
                "desc": "Use the source file location",
            },
            "frozen": {
                "name": "Frozen",
                "desc": "Use the \"<frozen module_name>\" symbolic value",
            },
        },
    },
    "module_name_choice": {
        "name": "Module Name Choice",
        "desc": "Choose the values for \"__name__\" and \"__package__\". Using \"runtime\" (default for module mode) created modules use the package to infer the value for \"__package__\" for full compatibility.\nThe \"original\" value (default for other modes) allows more static optimizations but is incompatible for modules that can usually be loaded into any package.",
        "elements": {
            "original": {
                "name": "Original",
                "desc": "Allow more static optimizations (default for other modes)",
            },
            "runtime": {
                "name": "Runtime",
                "desc": "Use the package to infer \"__package__\" for full compatibility (default for module mode)",
            },
        },
    },
    "output_filename": {
        "name": "Output Filename",
        "desc": "Specify the name of the executable file. Extension modules and standalone mode do not have this option and will error if used. This may need to include existing path information.\nDefault is \"<program_name>.exe\" on the current platform.",
        "elements": {
            "program_name": {
                "name": "Program Name",
                "desc": "<program_name>",
            },
        },
    },
    "output_dir": {
        "name": "Output Directory",
        "desc": "Specify the location to store intermediate files and the final output file. The chosen directory will house the build folder, distribution folder, binary, etc. Default is the current directory.",
        "elements": {
            "current_directory": {
                "name": "Current Directory",
                "desc": "Current directory",
            },
        },
    },
    "remove_output": {
        "name": "Remove Build Folder",
        "desc": "Delete the build folder after generating the exe or module file. Disabled by default.",
    },

    "no_pyi_file": {
        "name": "Do not generate pyi file",
        "desc": "Do not create \".pyi\" files for Nuitka to detect implicit imports when creating extension modules. Disabled by default.",
    },
    // Deployment control
    "deployment": {
        "name": "Deployment mode",
        "desc": "Disable code that is intended to make finding compatibility issues easier. For example, this will prevent execution with the '-c' argument, which is generally used by code trying to run\n" +
            "modules and can cause programs to restart themselves repeatedly. Disable it once you deploy to end users, as it is very helpful during development to find typical issues. Disabled by default.",
    },
    "no_deployment_flag": {
        "name": "Do not use deployment flag",
        "desc": "Keep deployment mode, but selectively disable parts of it. Deployment mode errors will output these identifiers. Empty by default",
    },
    // Environment control
    "force_runtime_environment_variable": {
        "name": "Force runtime environment variable",
        "desc": "Force the environment variable to a given value. Empty by default.",
    },
    // Debug features
    "debug": {
        "name": "Debug mode",
        "desc": "Perform all possible self-checks to find bugs in Nuitka, please do not use in production.\n" +
            "Disabled by default.",
    },
    "no_debug_immortal_assumptions": {
        "name": "Disable debug assumptions on immortal objects",
        "desc": "Disable checks normally done with \"--debug\". On Python 3.12 and above, do not check assumptions on known immortal objects.\n" +
            "Some C libraries break them. Enabled by default if \"--debug\" is enabled.",
    },
    "unstripped": {
        "name": "Do not strip debug information",
        "desc": "Keep debug information in the generated object files for better interaction with debuggers. Disabled by default.",
    },
    "profile": {
        "name": "Profiling",
        "desc": "Enable time profiling based on vmprof. Currently not functional. Disabled by default.",
    },
    "trace_execution": {
        "name": "Trace execution",
        "desc": "Trace execution and output. Output code lines before executing them. Disabled by default.",
    },
    "xml": {
        "name": "Output XML",
        "desc": "Write the internal program structure and optimization results in XML format to the given filename.",
    },
    "experimental": {
        "name": "Experimental",
        "desc": "Use features declared as \"experimental\". If there are no experimental features in the code, it may have no effect.\n" +
            "Use the secret tag for each experimental feature (check the source code).",
    },
    "low_memory": {
        "name": "Low memory mode",
        "desc": "Try to use less memory by reducing forking of C compilation tasks and using less memory options. For embedded machines. Use when facing out-of-memory issues. Disabled by default.",
    },
    "create_environment_from_report": {
        "name": "Create environment from report",
        "desc": "Create a new virtual environment in non-existing paths based on the given report file, e.g., '--report=compilation-report.xml'. Not executed by default.",
    },
    "generate_c_only": {
        "name": "Generate C source code only",
        "desc": "Only generate C source code, do not compile to binary or module. This is for debugging and code coverage analysis, not wasting CPU. Disabled by default.\n" +
            "Do not assume you can use this directly.",
    },
    // Nuitka development features
    "devel_missing_code_helpers": {
        "name": "Development - Missing code helpers",
        "desc": "Report warnings for code helpers that are attempted but do not exist.\n" +
            "This helps identify opportunities to improve generated code optimization by unused type knowledge. Defaults to False.",
    },
    "devel_missing_trust": {
        "name": "Development - Report missing trust",
        "desc": "Report warnings for imports that could be trusted but currently are not. This is to identify opportunities to improve handling of hard modules,\n" +
            "which sometimes allows more static optimization. Defaults to False.",
    },
    "devel_recompile_c_only": {
        "name": "Development - Recompile C source code only",
        "desc": "This is not incremental compilation, only for Nuitka development. Recompile existing files to C. Allows compiling edited C files for quick debugging of modifications to generated source code.\n" +
            "E.g., to see if code passes, output values, etc. Disabled by default. The files to look at depend on the compilation of the Python source code.",
    },
    "devel_internal_graph": {
        "name": "Development - Internal graph",
        "desc": "Create a graph of the internal optimization process, do not use for the entire program, please use only for small test cases. Disabled by default.",
    },
    // Backend C compiler choice
    "clang": {
        "name": "Force using clang",
        "desc": "Force using clang for compilation. On Windows systems, this requires a properly working Visual Studio version to be supported. Disabled by default.",
    },
    "mingw64": {
        "name": "Force using mingw64",
        "desc": "Force using MinGW64 on Windows. Disabled by default unless using MSYS2 and MinGW Python.",
    },
    "msvc": {
        "name": "Use MSVC version",
        "desc": "Force using a specific MSVC version on Windows. Allowed values are \"14.3\" (MSVC 2022) and other MSVC version numbers.\n" +
            "Use \"list\" to get a list of installed compilers, or use \"latest\". By default, the latest MSVC is used if available, otherwise MinGW64.",
        "elements": {
            "latest": {
                "name": "Latest",
                "desc": "Use the latest MSVC version",
            },
        },
    },
    "jobs": {
        "name": "Number of parallel compilation jobs",
        "desc": "Specify the number of allowed parallel C compiler jobs. A negative value means the number of CPUs on the system minus the given value.\n" +
            "By default, the full number of CPUs on the system is used unless low memory mode is enabled; in low memory mode, the default is 1.",
    },
    "lto": {
        "name": "Link Time Optimization",
        "desc": "Use Link Time Optimization (MSVC, gcc, clang) allowed values are \"yes\", \"no\", and \"auto\" (known to work). Defaults to \"auto\".",
        "elements": {
            "yes": {
                "name": "Yes",
                "desc": "Use Link Time Optimization",
            },
            "no": {
                "name": "No",
                "desc": "Do not use Link Time Optimization",
            },
            "auto": {
                "name": "Auto",
                "desc": "Automatically use Link Time Optimization",
            },
        },
    },
    "static_libpython": {
        "name": "Use static linking for Python",
        "desc": "Use static linking for Python. Allowed values are \"yes\", \"no\", and \"auto\" (known to work). Defaults to \"auto\".",
        "elements": {
            "yes": {
                "name": "Yes",
                "desc": "Use static linking for Python",
            },
            "no": {
                "name": "No",
                "desc": "Do not use static linking for Python",
            },
            "auto": {
                "name": "Auto",
                "desc": "Automatically use static linking for Python",
            },
        },
    },
    "cf_protection": {
        "name": "gcc compiler CF protection mode",
        "desc": "This option is specific to gcc. Select the \"cf-protection\" mode for the gcc compiler. The default value \"auto\" uses the gcc default, but you can override it,\n" +
            "e.g., using the \"none\" value to disable it. For more information on \"-fcf-protection\", see the gcc documentation",
        "elements": {
            "auto": {
                "name": "Auto",
                "desc": "Use the gcc default",
            },
        },
    },
    // Cache Control
    "disable_cache": {
        "name": "Disable cache",
        "desc": "Disable the selected cache, set \"all\" for all caches. Currently allowed values are: \"all\", \"ccache\", \"bytecode\",\n" +
            "\"compression\", \"dll-dependencies\".\n" +
            "Can be given multiple times or use comma-separated values. Empty by default.",
        "elements": {
            "all": {
                "name": "All",
                "desc": "Disable all caches",
            },
            "ccache": {
                "name": "ccache cache",
                "desc": "Do not attempt to use ccache (gcc, clang, etc.) or clcache (MSVC, clangcl).",
            },
            "bytecode": {
                "name": "Bytecode cache",
                "desc": "Do not reuse dependency analysis results of modules, especially those from the standard library, which are included as bytecode.",
            },
            "compression": {
                "name": "Compression cache",
                "desc": "Disable compression cache",
            },
            "dll_dependencies": {
                "name": "dll dependencies cache",
                "desc": "Disable dependency analyzer cache. This will significantly increase the time to create the distribution folder, but can be used if the cache is suspected to cause errors.",
            },
        },
    },
    "clean_cache": {
        "name": "Clean cache",
        "desc": "Clean the given cache before execution, set \"all\" for all caches. Currently allowed values are:\n" +
            "\"all\", \"ccache\", \"bytecode\", \"compression\", \"dll-dependencies\".\n" +
            "Can be given multiple times or use comma-separated values. Empty by default.",
        "elements": {
            "all": {
                "name": "All",
                "desc": "Clean all caches",
            },
            "ccache": {
                "name": "ccache cache",
                "desc": "Clean ccache cache",
            },
            "bytecode": {
                "name": "Bytecode cache",
                "desc": "Clean bytecode cache",
            },
            "compression": {
                "name": "Compression cache",
                "desc": "Clean compression cache",
            },
            "dll_dependencies": {
                "name": "dll dependencies cache",
                "desc": "Clean dll dependencies cache",
            },
        },
    },
    "disable_ccache": {
        "name": "Disable ccache",
        "desc": "Do not attempt to use ccache (gcc, clang, etc.) or clcache (MSVC, clangcl). Same effect as --disable-cache=ccache.",
    },
    "disable_dll_dependency_cache": {
        "name": "Disable dll dependency cache",
        "desc": "Disable dependency analyzer cache. This will significantly increase the time to create the distribution folder, but can be used if the cache is suspected to cause errors.\n" +
            "Same effect as --disable-cache=dll-dependencies.",
    },
    "force_dll_dependency_cache_update": {
        "name": "Force update dll dependency cache",
        "desc": "Force updating the dependency analyzer cache. This will significantly increase the time to create the distribution folder, but can be used if the cache is suspected to cause errors or needs updating.",
    },
    // PGO compilation choices
    "pgo_c": {
        "name": "Profile Guided Optimization",
        "desc": "Enable C-level Profile Guided Optimization (PGO) by first profiling and then using the results to feed back into the C compilation.\n" +
            "Note: This is experimental and not yet usable with Nuitka's standalone mode. Disabled by default.",
    },
    "pgo_args": {
        "name": "Profile Guided Optimization arguments",
        "desc": "Arguments to pass when performing Profile Guided Optimization (PGO). These arguments are passed to the special build executable during the PGO profiling run. Empty by default.",
    },
    "pgo_executable": {
        "name": "Profile Guided Optimization executable",
        "desc": "Command to execute when collecting profile information. Only use it if you need to start it via a prepared script. By default, the created program is used.",
    },
    // Tracing features
    "report": {
        "name": "Output report",
        "desc": "Input an XML filename, report details of modules, data files, compilation, plugins, etc., in an XML output file. This is also very useful for reporting issues.\n" +
            "For example, these reports can be used to easily recreate environments using '--create-environment-from-report', but the reports contain a lot of information. Disabled by default.",
    },
    "report_diffable": {
        "name": "Report diffable",
        "desc": "Report data in a comparable way, i.e., without time or memory usage values that change with each run. Disabled by default.",
    },
    "report_user_provided": {
        "name": "Report user provided values",
        "desc": "Report data from you. This can be given multiple times and can be in any form of \"key=value\", where the key should be an identifier,\n" +
            "e.g., use \"--report-user-provided=pipenv-lock-hash=64a5e4\" to track some input values. Empty by default.",
    },
    "report_template": {
        "name": "Report template",
        "desc": "Report via template. Requires providing a template and output filename \"template.rst.j2:output.rst\". For built-in templates, see the user manual.\n" +
            "Can be given multiple times. Empty by default.",
    },
    "quiet": {
        "name": "Quiet mode",
        "desc": "Suppress all informational output but show warnings. Disabled by default.",
    },
    "show_scons": {
        "name": "Show scons",
        "desc": "Run the C build backend Scons, showing the executed commands, detailed information about the detected compilers. Disabled by default.",
    },
    "no_progressbar": {
        "name": "Do not show progress bar",
        "desc": "Disable the progress bar. Disabled by default.",
    },
    "show_progress": {
        "name": "Show progress",
        "desc": "Obsolete: Provide progress information and statistics. Disable the normal progress bar. Disabled by default.",
    },
    "show_memory": {
        "name": "Show memory",
        "desc": "Show memory usage. Disabled by default.",
    },
    "show_modules": {
        "name": "Show modules",
        "desc": "Obsolete: You should use the '--report' file instead. Provide information about included modules and DLLs. Disabled by default.",
    },
    "show_modules_output": {
        "name": "Show modules output path",
        "desc": "Used to set the output location for '--show-modules', should be a filename. Defaults to standard output.",
    },
    "verbose": {
        "name": "Verbose mode",
        "desc": "Output detailed information about the actions taken, especially during optimization, which can produce a lot of output. Disabled by default.",
    },
    "verbose_output": {
        "name": "Verbose mode output path",
        "desc": "Used to set the output location for '--verbose', should be a filename. Defaults to standard output.",
    },
    // General OS controls
    "force_stdout_spec": {
        "name": "Force standard output specification",
        "desc": "Force the program's standard output to go to this location. Useful for programs that disable the console and for Windows service plugins using Nuitka Commercial. Not activated by default,\n" +
            "e.g., use '{PROGRAM_BASE}.out.txt', i.e., a file near the program directory, see the user manual for the full list of available values.",
    },
    "force_stderr_spec": {
        "name": "Force standard error specification",
        "desc": "Force the program's standard error to go to this location. Useful for programs that disable the console and for Windows service plugins using Nuitka Commercial. Not activated by default,\n" +
            "e.g., use '{PROGRAM_BASE}.err.txt', i.e., a file near the program directory, see the user manual for the full list of available values.",
    },
    // Windows specific controls
    "windows_console_mode": {
        "name": "Windows console mode",
        "desc": "Select the console mode to use, the default mode is force",
        "elements": {
            "force": {
                "name": "Force mode",
                "desc": "This will create a console window if none is available, i.e., the program is started from a console window.",
            },
            "disable": {
                "name": "Disable mode",
                "desc": "No console will be created or used.",
            },
            "attach": {
                "name": "Attach mode",
                "desc": "Use the existing console for output",
            },
            "hide": {
                "name": "Hide mode",
                "desc": "A newly created console will be hidden, and an already existing console will behave like 'force mode'",
            },
        },
    },
    "windows_icon_from_ico": {
        "name": "Windows icon (ico file)",
        "desc": "Add an icon to the executable. Can be given multiple times for different resolutions or files containing multiple icons. When choosing a file containing multiple icons,\n" +
            "you can also use the #<n> suffix to specify a particular icon to include and ignore all others, where n is an integer index starting from 1",
    },
    "windows_icon_from_exe": {
        "name": "Windows icon (exe file)",
        "desc": "Copy the icon from this executable (Windows only).",
    },
    "onefile_windows_splash_screen_image": {
        "name": "Onefile Windows splash screen image",
        "desc": "When compiling to onefile on Windows, display this image while loading the application. Disabled by default.",
    },
    "windows_uac_admin": {
        "name": "Request Windows User Control (UAC) admin privileges",
        "desc": "Request Windows User Control (UAC) admin privileges when executing. (Windows only). Disabled by default.",
    },
    "windows_uac_uiaccess": {
        "name": "Request Windows User Control (UAC) UI access privileges",
        "desc": "Request Windows User Control privileges (UAC) for running in specific folders and remote desktop access. (Windows only). Disabled by default.",
    },
    // macOS specific controls
    "macos_create_app_bundle": {
        "name": "Create macOS application bundle",
        "desc": "When compiling for macOS, create a bundle instead of a plain binary application. This is the only way to disable the console, get high DPI graphics, etc., and will enable standalone mode. Disabled by default.",
    },
    "macos_target_arch": {
        "name": "macOS target architecture",
        "desc": "What architecture this program should run on. The default value and limitations are those allowed by the running Python. The default is \"native\", which is the architecture Python runs on.",
        "elements": {
            "native": {
                "name": "Native architecture",
                "desc": "The default value, which is the architecture Python runs on",
            },
        },
    },
    "macos_app_icon": {
        "name": "macOS application icon path",
        "desc": "Add an icon to the application bundle. Can only be given once. Defaults to the Python icon if available.",
        "elements": {
            "python_icon": {
                "name": "Python icon",
                "desc": "The Python icon, if available, this option is the default",
            },
        },
    },
    "macos_signed_app_name": {
        "name": "macOS signed application name",
        "desc": "The application name used for macOS signing. For best results, follow the naming format \"com.YourCompany.AppName\"\n" +
            "as these names must be globally unique and may grant access to protected APIs.",
    },
    "macos_app_name": {
        "name": "macOS application name",
        "desc": "The product name to use in the macOS bundle information. Defaults to the base filename of the binary.",
    },
    "macos_app_mode": {
        "name": "macOS application mode",
        "desc": "The application mode for the application bundle.",
        "elements": {
            "gui": {
                "name": "GUI mode",
                "desc": "The default value \"gui\" is a good choice when you launch a window and want it to appear in the Dock.",
            },
            "background": {
                "name": "Background mode",
                "desc": "The application will be a \"background\" application if there are no windows.",
            },
            "ui_element": {
                "name": "UI element mode",
                "desc": "For UI elements that appear later, \"ui-element\" is in between.\n" +
                    "The application will not appear in the Dock, but when it opens a window later, it will get full access to the desktop.",
            },
        },
    },
    "macos_sign_identity": {
        "name": "macOS sign identity",
        "desc": "When signing on macOS, by default a temporary identity is used, but with this option, you can specify another identity to use.\n" +
            "Code signing on macOS is now mandatory and cannot be disabled. Use \"auto\" to detect your only installed identity.\n" +
            "If not given, defaults to \"ad-hoc\".",
        "elements": {
            "auto": {
                "name": "Auto",
                "desc": "Detect your only installed identity",
            },
            "ad_hoc": {
                "name": "Ad-hoc",
                "desc": "Ad-hoc signing, the default value",
            },
        },
    },
    "macos_sign_notarization": {
        "name": "macOS sign notarization",
        "desc": "When signing for notarization, use the correct TeamID identity from Apple, with the required runtime signing options so it can be accepted.",
    },
    "macos_app_version": {
        "name": "macOS application version",
        "desc": "The product version to use in the macOS bundle information. If not given, defaults to \"1.0\".",
        "elements": {
            "default_version": {
                "name": "1.0",
                "desc": "The default value",
            },
        },
    },
    "macos_app_protected_resource": {
        "name": "Request macOS protected resource",
        "desc": "Request access to macOS protected resources, e.g., \"NSMicrophoneUsageDescription:Microphone access for recording audio.\" Request access to the microphone,\n" +
            "and provide an informational text to the user explaining why this is needed. Before the colon is an operating system identifier for the access permission, then the informational text.\n" +
            "Legal values can be found at https://developer.apple.com/documentation/bundleresources/information_property_list/protected_resources,\n" +
            "this option can be specified multiple times. Empty by default.",
    },
    // Linux specific controls
    "linux_icon": {
        "name": "Linux icon",
        "desc": "Add an icon to the single file binary executable. Can only be given once. Defaults to the Python icon if available.",
    },
    // Binary Version Information
    "company_name": {
        "name": "Company name",
        "desc": "The company name to use in the version information. Empty by default.",
    },
    "product_name": {
        "name": "Product name",
        "desc": "The product name to use in the version information. Defaults to the base filename of the binary.",
    },
    "file_version": {
        "name": "File version",
        "desc": "The file version to use in the version information. Must be a sequence of up to 4 numbers, e.g., 1.0 or 1.0.0.0, no more numbers or strings allowed. Empty by default.",
    },
    "product_version": {
        "name": "Product version",
        "desc": "The product version to use in the version information. Must be a sequence of up to 4 numbers, e.g., 1.0 or 1.0.0.0, no more numbers or strings allowed. Empty by default.",
    },
    "file_description": {
        "name": "File description",
        "desc": "The file description to use in the version information. Currently only available on Windows. Defaults to the filename of the binary.",
    },
    "copyright": {
        "name": "Copyright text",
        "desc": "The copyright information to use in the version information. Currently only available on Windows/macOS. Not displayed by default.",
    },
    "trademarks": {
        "name": "Trademarks text",
        "desc": "The trademarks to use in the version information. Currently only available on Windows/macOS. Not displayed by default.",
    },
    // Plugin control
    "enable_plugins": {
        "name": "Enable plugins",
        "desc": "Enable plugins. Must be plugin names. Empty by default",
        "elements": {
            "anti_bloat": {
                "name": "Anti-bloat",
                "desc": "Remove stupid import patches from widely used library module sources.",
            },
            "data_files": {
                "name": "Include data files",
                "desc": "Include data files specified by package configuration files.",
            },
            "delvewheel": {
                "name": "Delvewheel support",
                "desc": "Support packages using delvewheel in standalone mode",
            },
            "dill_compat": {
                "name": "Dill package compatibility support",
                "desc": "Support compatibility with the 'dill' package",
            },
            "dll_files": {
                "name": "Include DLL files",
                "desc": "Include DLL configuration files according to package configuration files",
            },
            "enum_compat": {
                "name": "Enum compatibility",
                "desc": "Support Python2 and the enum package",
            },
            "eventlet": {
                "name": "Eventlet support",
                "desc": "Support including 'eventlet' dependencies and its monkey patch needs for the 'dns' package.",
            },
            "gevent": {
                "name": "Gevent support",
                "desc": "Support the gevent package",
            },
            "gi": {
                "name": "GI support",
                "desc": "Support typelib dependencies for the GI package",
            },
            "glfw": {
                "name": "GLFW support",
                "desc": "Support using 'OpenGL' (PyOpenGL) and 'glfw' packages in standalone mode",
            },
            "implicit_imports": {
                "name": "Implicit imports",
                "desc": "Provide implicit imports according to package configuration files.",
            },
            "kivy": {
                "name": "Kivy support",
                "desc": "Support the 'kivy' package.",
            },
            "matplotlib": {
                "name": "Matplotlib support",
                "desc": "Support the 'matplotlib' module.",
            },
            "multiprocessing": {
                "name": "Multiprocessing support",
                "desc": "Support Python's 'multiprocessing' module.",
            },
            "no_qt": {
                "name": "Disable Qt",
                "desc": "Disable all Qt bindings in standalone mode.",
            },
            "options_nanny": {
                "name": "Options nanny",
                "desc": "Notify users of potential issues according to package configuration files.",
            },
            "pbr_compat": {
                "name": "Pbr compatibility support",
                "desc": "Support using the 'pbr' package in standalone mode.",
            },
            "pkg_resources": {
                "name": "Pkg resources support",
                "desc": "Resolve methods for pkg resources",
            },
            "pmw_freezer": {
                "name": "Pmw support",
                "desc": "Support the 'Pmw' package",
            },
            "pylint_warnings": {
                "name": "Pylint warnings",
                "desc": "Support PyLint / PyDev code markings.",
            },
            "pyqt5": {
                "name": "PyQt5 support",
                "desc": "Support the 'PyQt5' package.",
            },
            "pyqt6": {
                "name": "PyQt6 support",
                "desc": "Support the 'PyQt6' package.",
            },
            "pyside2": {
                "name": "PySide2 support",
                "desc": "Support the 'PySide2' package.",
            },
            "pyside6": {
                "name": "PySide6 support",
                "desc": "Support the 'PySide6' package.",
            },
            "pywebview": {
                "name": "PyWebview support",
                "desc": "Support the 'webview' package (pywebview on PyPI).",
            },
            "tk_inter": {
                "name": "Tkinter support",
                "desc": "Support Python's Tk module.",
            },
            "transformers": {
                "name": "Transformers implicit imports",
                "desc": "Provide implicit imports for the transformers package.",
            },
            "upx": {
                "name": "Auto use upx",
                "desc": "Automatically use UPX to compress the created binary.",
            },
        },
    },
    "disable_plugins": {
        "name": "Disable plugins",
        "desc": "Disable plugins. Must be plugin names. Use '--plugin-list' to query the full list and exit. Most of the time, disabling standard plugins is not a good idea. Empty by default.",
        "elements": {
            "anti_bloat": {
                "name": "Anti-bloat",
                "desc": "Remove stupid import patches from widely used library module sources.",
            },
            "data_files": {
                "name": "Include data files",
                "desc": "Include data files specified by package configuration files.",
            },
            "delvewheel": {
                "name": "Delvewheel support",
                "desc": "Support packages using delvewheel in standalone mode",
            },
            "dill_compat": {
                "name": "Dill package compatibility support",
                "desc": "Support compatibility with the 'dill' package",
            },
            "dll_files": {
                "name": "Include DLL files",
                "desc": "Include DLL configuration files according to package configuration files",
            },
            "enum_compat": {
                "name": "Enum compatibility",
                "desc": "Support Python2 and the enum package",
            },
            "eventlet": {
                "name": "Eventlet support",
                "desc": "Support including 'eventlet' dependencies and its monkey patch needs for the 'dns' package.",
            },
            "gevent": {
                "name": "Gevent support",
                "desc": "Support the gevent package",
            },
            "gi": {
                "name": "GI support",
                "desc": "Support typelib dependencies for the GI package",
            },
            "glfw": {
                "name": "GLFW support",
                "desc": "Support using 'OpenGL' (PyOpenGL) and 'glfw' packages in standalone mode",
            },
            "implicit_imports": {
                "name": "Implicit imports",
                "desc": "Provide implicit imports according to package configuration files.",
            },
            "kivy": {
                "name": "Kivy support",
                "desc": "Support the 'kivy' package.",
            },
            "matplotlib": {
                "name": "Matplotlib support",
                "desc": "Support the 'matplotlib' module.",
            },
            "multiprocessing": {
                "name": "Multiprocessing support",
                "desc": "Support Python's 'multiprocessing' module.",
            },
            "no_qt": {
                "name": "Disable Qt",
                "desc": "Disable all Qt bindings in standalone mode.",
            },
            "options_nanny": {
                "name": "Options nanny",
                "desc": "Notify users of potential issues according to package configuration files.",
            },
            "pbr_compat": {
                "name": "Pbr compatibility support",
                "desc": "Support using the 'pbr' package in standalone mode.",
            },
            "pkg_resources": {
                "name": "Pkg resources support",
                "desc": "Resolve methods for pkg resources",
            },
            "pmw_freezer": {
                "name": "Pmw support",
                "desc": "Support the 'Pmw' package",
            },
            "pylint_warnings": {
                "name": "Pylint warnings",
                "desc": "Support PyLint / PyDev code markings.",
            },
            "pyqt5": {
                "name": "PyQt5 support",
                "desc": "Support the 'PyQt5' package.",
            },
            "pyqt6": {
                "name": "PyQt6 support",
                "desc": "Support the 'PyQt6' package.",
            },
            "pyside2": {
                "name": "PySide2 support",
                "desc": "Support the 'PySide2' package.",
            },
            "pyside6": {
                "name": "PySide6 support",
                "desc": "Support the 'PySide6' package.",
            },
            "pywebview": {
                "name": "PyWebview support",
                "desc": "Support the 'webview' package (pywebview on PyPI).",
            },
            "tk_inter": {
                "name": "Tkinter support",
                "desc": "Support Python's Tk module.",
            },
            "transformers": {
                "name": "Transformers implicit imports",
                "desc": "Provide implicit imports for the transformers package.",
            },
            "upx": {
                "name": "Auto use upx",
                "desc": "Automatically use UPX to compress the created binary.",
            },
        },
    },
    "plugin_list": {
        "name": "Plugin list",
        "desc": "Display the list of all available plugins and exit. Disabled by default.",
    },
    "user_plugin": {
        "name": "User plugin",
        "desc": "Filename of user plugin. Can be given multiple times. Empty by default.",
    },
    "module_parameter": {
        "name": "Module parameter",
        "desc": "Provide a module parameter. Some packages require you to provide extra decisions. The current format is --module-parameter=module.name-option-name=value\n" +
            "(module parameter=module.name-option-name=value). Empty by default.",
    },
    "show_source_changes": {
        "name": "Show source code changes",
        "desc": "Show source code changes to the original Python file content before compilation. Mainly for developing plugins and configuring Nuitka packages. For example, using '-show-source-changes=numpy.**'\n" +
            "can show all changes under the given namespace, or use '*' to see all possible, but large, changes. Empty by default",
    },
    // Cross compilation
    "target": {
        "name": "Target",
        "desc": "Cross-compilation target. This feature is highly experimental and under development, currently not available. We are developing the target '--target=wasi', other targets are not supported yet.",
    },
    // Plugin options of 'anti-bloat'
    "show_anti_bloat_changes": {
        "name": "Show anti-bloat changes",
        "desc": "Annotate changes made by the plugin.",
    },
    "noinclude_setuptools_mode": {
        "name": "Noinclude setuptools mode",
        "desc": "What to do when encountering \"setuptools\" or \"setuptools_scm\" imports. This package can get very large with many dependencies and should be avoided.",
    },
    "noinclude_pytest_mode": {
        "name": "Noinclude pytest mode",
        "desc": "What to do when encountering \"pytest\" or \"nose\" imports. This package can get very large with many dependencies and should be avoided.",
    },
    "noinclude_unittest_mode": {
        "name": "Noinclude unittest mode",
        "desc": "What to do when encountering \"unittest\" imports. This package can get very large with many dependencies and should be avoided.",
    },
    "noinclude_pydoc_mode": {
        "name": "Noinclude pydoc mode",
        "desc": "What to do when encountering \"pydoc\" imports. The use of this package marks code that is useless in deployment and should be avoided.",
    },
    "noinclude_IPython_mode": {
        "name": "Noinclude IPython mode",
        "desc": "What to do when encountering \"IPython\" imports. This package can get very large with many dependencies and should be avoided.",
    },
    "noinclude_dask_mode": {
        "name": "Noinclude dask mode",
        "desc": "What to do when encountering \"dask\" imports. This package can get very large with many dependencies and should be avoided.",
    },
    "noinclude_numba_mode": {
        "name": "Noinclude numba mode",
        "desc": "What to do when encountering \"numba\" imports. This package can get very large with many dependencies and currently does not work properly in standalone mode.\n" +
            "This package can get very large with many dependencies and should be avoided.",
    },
    "noinclude_default_mode": {
        "name": "Noinclude default mode",
        "desc": "This actually provides the default \"warning\" value for the above options and can be used to turn on all of the above options.",
    },
    "noinclude_custom_mode": {
        "name": "Noinclude custom mode",
        "desc": "What to do when encountering specific imports. The format is the module name, which can and should be a top-level package, followed by an option, \"error\", \"warning\", \"nofollow\",\n" +
            "e.g., PyQt5:error.",
    },
    // Plugin options of 'playwright'
    "playwright_include_browser": {
        "name": "Playwright include browser",
        "desc": "Playwright browser to include. Can be specified multiple times. Use \"all\" to include all installed browsers.",
        "elements": {
            "all": {
                "name": "Include all",
                "desc": "Include all installed browsers",
            },
        },
    },
    // Plugin options of 'spacy'
    "spacy_language_model": {
        "name": "SpaCy language model",
        "desc": "Spacy language model to use. Can be specified multiple times. Use 'all' to include all downloaded models.",
        "elements": {
            "all": {
                "name": "Include all",
                "desc": "Include all downloaded models",
            },
        },
    },

};